import React, { Component } from 'react';
import LoungeAirport from './LoungeAirport';
import {DataContext} from "../../../OtaContext";


class LoungeAccess extends Component {
  static contextType = DataContext

  render() {
    //actually you can add segments here if waiting time is too long
    var loungesPoints = this.context.ItineraryRsc.map(legItm => {
      return legItm.from['iata']
    }).filter(point => {
      return (point in this.context.upsalesPricing['Lounge']);
    })

    var loungesPricing = loungesPoints.map(airport => {
      return (this.context.upsalesPricing['Lounge'][airport]['pricing']['ADT'] * this.context.numADT +
      this.context.upsalesPricing['Lounge'][airport]['pricing']['CNN'] * this.context.numCNN);
    });

    var overall = [];
    for (var i =0;i < loungesPoints.length; i++) {
      overall.push({airport:loungesPoints[i],hourlyPrice:loungesPricing[i]});
    }

    return (
        overall.map(ovrl => {
          return <div> <LoungeAirport point={ovrl.airport} price={ovrl.hourlyPrice} /> </div>
        })
    );
  }
}



export default LoungeAccess;
