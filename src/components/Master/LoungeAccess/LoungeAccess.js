import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import * as actsUpsales from '../../../actions/master/actionsUpsales';
import LoungeAirport from './LoungeAirport';

class LoungeAccess extends Component {
  render() {
    const StopDataDep = { legTitle: '', priceData: [] };
    const StopDataRet = { legTitle: '', priceData: [] };

    for (let i = 0; i < this.props.itinerary.length; i++) {
      const segLen = this.props.itinerary[i].segments.length;

      const startPoint = this.props.itinerary[i].from.iata;
      const endPoint = this.props.itinerary[i].to.iata;

      const legTitle = `${startPoint} - ${endPoint}`;
      const priceData = [];

      if (segLen > 1) {
        for (let j = 0; j < segLen; j++) {
          const stop = this.props.itinerary[i].segments[j].from.iata;
          for (let k = 0; k < this.props.loungePrices.length; k++) {
            if (this.props.loungePrices[k].airport == stop) {
              priceData.push(this.props.loungePrices[k]);
            }
          }
        }
        if (priceData.length > 0) {
          StopDataDep.legTitle = legTitle;
          StopDataDep.priceData = priceData;
        }
      }
    }


    console.log(StopDataDep);
    return (


      <section>

        <div className="row contactDetails">
          <div className="col-8">

            <div className="card">
              <div className="card-header bg-light">

                <div className="row">

                  <div className="col-6">


                                        Get Airport Lounge Access!
                  </div>

                  <div className="col-2 offset-3">
                    <button
                      className="btn btn-sm btn-dark btn-block btnToggle"
                      data-toggle="collapse"
                      data-target="#blueRibbonCollapse"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >


                      <Translate value="general.Toggle" />
                    </button>
                  </div>

                </div>
              </div>


              <div className="card-body collapse show" id="blueRibbonCollapse">

                  <div className="alert alert-primary" role="alert">
                      {StopDataDep.legTitle}
                  </div>

                    {StopDataDep.priceData.map((prc ,idx ) => {
                       return (<LoungeAirport prices={prc} />);
                    })}
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
    itinerary: state.airTripReducer,
    currency: state.currentCurrencyReducer,
    loungePrices: state.loungeAccessPricesReducer,
  };
}


export default connect(mapStateToProps)(LoungeAccess);
