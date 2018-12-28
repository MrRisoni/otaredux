import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actsUpsales from '../../../actions/master/actionsUpsales';
import * as actsPaxes from '../../../actions/master/actionsPassengers';
import * as actsMaster from '../../../actions/master/actionsMaster';
import * as actsBags from '../../../actions/master/actionsBags';
import * as actsInsurance from '../../../actions/master/actionsInsurance';
import * as actsMeals from '../../../actions/master/actionsMeals';
import * as actsPreseat from '../../../actions/master/actionsPreseat';

class BlueRibbon extends Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(ev) {
    this.props.changeBlueRibbonHandler((ev.target.value == 1));
  }

  render() {
    const price = (this.props.passengers.filter(px => px.active === true).length * this.props.blueRibbonPrices.pricePerPax).toFixed(2);


    return (
      <div className="row contactDetails">
        <div className="col-8">

          <div className="card">
            <div className="card-header bg-light">

              <div className="row">

                <div className="col-6">


                                    Buy Blue Ribbon Bag Insurance!
                </div>

                <div className="col-2 offset-3">
                  <button
                    className="btn btn-sm btn-dark btn-block btnToggle"
                    data-toggle="collapse"
                    data-target="#blueRibbonCollapse"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >


                                        Toggle
                  </button>
                </div>

              </div>
            </div>


            <div className="card-body collapse show" id="blueRibbonCollapse">

              <div className="row">
                <div className="col-8">


                  Pay
                  {price}
                  {' '}
                  {this.props.currency.code}
                  {' '}

and you
                                    will receive 1000 EUR reimbursement for each lost baggage
                </div>

                <div className="col-3">

                  <select className="form-control" onChange={this.handleSelection}>
                    <option key="no" value="0">No thanks</option>
                    <option key="yes" value="1">Yes please</option>
                  </select>

                </div>
              </div>
            </div>


          </div>
        </div>

      </div>

    );
  }
}


function mapStateToProps(state) {
  return {
    passengers: state.passengersMasterReducer,
    currency: state.currentCurrencyReducer,
    blueRibbonPrices: state.getBlueRibbonReducer,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    changeBlueRibbonHandler: actsUpsales.changeBlueRibbonAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(BlueRibbon);
