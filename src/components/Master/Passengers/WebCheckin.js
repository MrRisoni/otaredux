import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';


import * as actsUpsales from '../../../actions/master/actionsUpsales';


class WebCheckin extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    if (ev.target.value ==1) {
      this.props.changeWebCheckinHandler();

    }else {
      this.props.removeWebCheckinHandler();
    }
  }

  render() {
    let price = (this.props.passengers.filter(px => px.active === true).length * this.props.webCheckinPrices.pricePerPax).toFixed(2);
    price *= this.props.currency.rate;
    price = price.toFixed(2);

    return (
      <section>

        <div className="row contactDetails">
          <div className="col-8">

            <div className="card">
              <div className="card-header bg-light">

                <div className="row">

                  <div className="col-3">Web Checkin </div>

                  <div className="col-2 offset-6">
                    <button
                      className="btn btn-sm btn-dark btn-block btnToggle"
                      data-toggle="collapse"
                      data-target="#flexibleTicketCollapse"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >

                      <Translate value="general.Toggle" />
                    </button>
                  </div>

                </div>
              </div>


              <div className="card-body collapse show" id="flexibleTicketCollapse">

                <div className="row">
                  <div className="col-8">


                                        Pay
                    {' '}
                    {price}
                    {' '}
                    {this.props.currency.code}
                    {' '}

                                        and we will do the checkin for you and send you the boarding passes
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
    webCheckinPrices: state.webCheckinPriceReducer,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    changeWebCheckinHandler: actsUpsales.changeWebCheckinAction,
    removeWebCheckinHandler: actsUpsales.removeWebCheckinAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(WebCheckin);
