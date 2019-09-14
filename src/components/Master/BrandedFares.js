import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actsUpsales from '../../actions/master/actionsUpsales';

class BrandedFares extends Component {
  render() {
    const headers = [<th>Offer</th>];
    const prices = [<th>Price</th>];

    let allDescriptions = [];
    this.props.brandedFares[0].priceClasses.forEach((prc) => {
    //  headers.push(<th className="text-center">{prc.code} </th>);
      headers.push(<th className="text-center">
        <div>
          {prc.code}
          <input
            className="form-check-input exampleRadios"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
        </div>
                   </th>);


      prices.push(<th className="text-center">{prc.priceUpPercentage}</th>);

      prc.description.forEach((offr) => {
        allDescriptions.push(offr);
      });
    });

    allDescriptions = _.uniq(allDescriptions);

    console.log('Branded offers');
    console.log(allDescriptions);


    const rows = [];

    allDescriptions.forEach((desc) => {
      const cols = [];
      this.props.brandedFares[0].priceClasses.forEach((prc) => {
        if (prc.description.indexOf(desc) > -1) {
          cols.push(<td className="brandYes text-center">Yes</td>);
        } else {
          cols.push(<td className="brandNope text-center">No</td>);
        }
      });
      rows.push(<tr>
        <td>{desc}</td>
        {cols}
                </tr>);
    });


    return (
      <section id="brandedWidget">
        <div className="row">
          <div className="col-8">
            <table className="table table-striped table-bordered table-hover">
              <thead className="thead-dark">
                <tr>{headers}</tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
              <tfoot className="thead-dark">
                <tr>{prices}</tr>
              </tfoot>
            </table>
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
    fastTrackPrice: state.getPurchasedCostAirHelpReducer,
    brandedFares: state.fetchBrandOffersReducer,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addAirHelpHandler: actsUpsales.addAirHelpAction,
    removeAirHelpHandler: actsUpsales.removeAirHelpAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(BrandedFares);
