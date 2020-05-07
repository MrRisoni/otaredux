  
import React, { Component } from "react";
import SegmentTabs from "./SegmentTabs";
import {DataContext} from "../../OtaContext";

const seatMaps = require("../../../resources/seatMapLayout");


class PreSeat extends Component {
  render() {
    return (
      <main>
        <SegmentTabs stmp={seatMaps} />
      </main>
    );
  }
}

export default PreSeat;