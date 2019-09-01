import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';

import * as actsUpsales from '../../../actions/master/actionsUpsales';

class BlueRibbon extends Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(ev) {
   
    if(ev.target.value ==1) {
      this.props.addBlueRibbonHandler();
    }
    else {
      this.props.removeBlueRibbonHandler();
    }
  }

  render() {
    let price = this.props.blueRibbonPrice * this.props.currency.rate;
      price = price.toFixed(2);

    return (
        <section>

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


                                       <Translate value="general.Toggle"/>
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
        </section>

    );
  }
}


function mapStateToProps(state) {
  return {
    passengers: state.passengersMasterReducer,
    currency: state.currentCurrencyReducer,
    blueRibbonPrice: state.getPurchaseCostBlueRibbonReducer,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addBlueRibbonHandler: actsUpsales.addBlueRibbonAction,
    removeBlueRibbonHandler: actsUpsales.removeBlueRibbonAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(BlueRibbon);
