import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';

import * as actsUpsales from '../../actions/master/actionsUpsales';


class FastTrack extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        this.props.changeFastTrackHandler((ev.target.value == 1));
    }

    render() {
        let  price = (this.props.passengers.filter(px => px.active === true).length * this.props.fastTrackPrice.pricePerPax).toFixed(2);
        price *= this.props.currency.rate;
        price = price.toFixed(2);

        return (
            <section>

                <div className="row contactDetails">
                    <div className="col-8">

                        <div className="card">
                            <div className="card-header bg-light">

                                <div className="row">

                                    <div className="col-10">

                                        Fast Track Priority Queue in Security Check
                                    </div>

                                    <div className="col-2">
                                        <button
                                            className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target="#fastTrackCollapse"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >

                                            <Translate value="general.Toggle"/>
                                        </button>
                                    </div>

                                </div>
                            </div>


                            <div className="card-body collapse show" id="fastTrackCollapse">

                                <div className="row">
                                    <div className="col-8">

                                        Pay
                                        {' '}
                                        {price}
                                        {' '}
                                        {this.props.currency.code}
                                        {' '}
                                        and you will
                                        be placed in a priority queue during security check
                                    </div>

                                    <div className="col-3">

                                        <select className="form-control" onChange={this.handleClick}>
                                            <option key="no" value="0">No thanks</option>
                                            <option key="yes" value="1">Yes please</option>
                                        </select>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
        );
    }
}


function mapStateToProps(state) {
    return {
        passengers: state.passengersMasterReducer,
        currency: state.currentCurrencyReducer,
        fastTrackPrice: state.fastTrackPriceReducer,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeFastTrackHandler: actsUpsales.changeFastTrackAction,

    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(FastTrack);

