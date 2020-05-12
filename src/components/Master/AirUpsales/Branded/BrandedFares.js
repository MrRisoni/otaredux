import React, { Component } from 'react';
import _ from 'lodash';
import * as actsUpsales from '../../../../actions/master/actionsUpsales';

import  BrandedTranslations from './brandedLocales.json';

class BrandedFares extends Component {
  render() {

      console.log('lang branded');
console.log(BrandedTranslations);
      console.log(this.props.lang.locale);
      console.log(BrandedTranslations[this.props.lang.locale]);

      console.log(BrandedTranslations[this.props.lang.locale]['PriorityBoarding']);

      console.log(BrandedTranslations[this.props.lang.locale].PriorityBoarding);


      const headers = [<th>Offer</th>];
    const prices = [<th>Price</th>];

    let allDescriptions = [];
    this.props.brandedFares[0].priceClasses.forEach((prc) => {

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
      //  allDescriptions.push(BrandedTranslations[this.props.lang.locale][offr.code]);
          allDescriptions.push(offr.code);

      });
    });

    allDescriptions = _.uniq(allDescriptions);



    const rows = [];

    allDescriptions.forEach((descCode) => {
      const cols = [];
      this.props.brandedFares[0].priceClasses.forEach((prc) => {
          let thisPriceOffers = prc.description.map( (prcDscrItm) => {
              return prcDscrItm.code;
          });

        if (thisPriceOffers.indexOf(descCode) > -1) {
          cols.push(<td className="brandYes text-center">  branded.Yes</td>);
        } else {
          cols.push(<td className="brandNope text-center">  branded.No</td>);
        }
      });

        rows.push(<tr>
            <td>{BrandedTranslations[this.props.lang.locale][descCode]}</td>
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



export default BrandedFares;