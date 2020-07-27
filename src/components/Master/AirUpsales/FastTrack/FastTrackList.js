import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";
import FastTrack from "./FastTrack";

class FastTrackList extends Component {
  static contextType = DataContext;

  render() {
    var fastTrackHere = this.context.ItineraryRsc.map(legItm => {
      return legItm.from["iata"];
    }).filter(point => {
      return point in this.context.upsalesPricing["fastTrack"];
    });
    return fastTrackHere.map(fst => {
      return (
        <div>
          {" "}
          <FastTrack
            point={fst}
            price={this.context.upsalesPricing["fastTrack"][fst]}
          />{" "}
        </div>
      );
    });
  }
}

export default FastTrackList;
