import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Translate} from 'react-redux-i18n';
import * as actsUpsales from '../../../actions/master/actionsUpsales';


class Parking extends Component {
    constructor(props) {
        super(props);
        this.handleAddDays = this.handleAddDays.bind(this);
        this.handleSubtractDays = this.handleSubtractDays.bind(this);

    }

    handleAddDays()
    {
        console.log('add park days');
        this.props.addParkingDayHandler();
    }


    handleSubtractDays()
    {
        console.log('remove park days');

        this.props.subParkingDayHandler();
    }


    render() {


        return (
            <section>

                <div className="row contactDetails">
                    <div className="col-8">

                        <div className="card">
                            <div className="card-header bg-light">

                                <div className="row">

                                    <div className="col-3">

                                        Parking up to 22 days
                                    </div>

                                    <div className="col-2 offset-6">
                                        <button
                                            className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target="#flexibleTicketCollapse"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >

                                            <Translate value="general.Toggle"/>
                                        </button>
                                    </div>

                                </div>
                            </div>


                            <div className="card-body collapse show" id="flexibleTicketCollapse">
                                <div className="row">
                                    <div className="col-12">
                                        <table className="table table-bordered table-stripped">
                                            <thead>
                                                <tr>
                                                    <th>Up to days</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.pricingTable.map( prcd => {
                                                return (<tr>
                                                        <td>Up to days {prcd.upToDays}</td>
                                                        <td> {prcd.price} E</td></tr>)
                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">park days {this.props.parkDays}</div>
                                    <div className="col-4">
                                        <button className="btn-primary btn btn-sm" onClick={this.handleAddDays}>Add
                                            Day
                                        </button>
                                        <button className="btn-danger btn btn-sm"
                                                onClick={this.handleSubtractDays}>Remove Day
                                        </button>


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
        pricingTable: state.getParkPricingReducer,
        parkDays: state.getParkingDaysReducer,
        currency: state.currentCurrencyReducer,
        parkingCost : state.getParkPricingFinalCostReducer,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addParkingDayHandler: actsUpsales.addParkingDayAction,
        subParkingDayHandler: actsUpsales.subParkingDayAction,
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Parking);



