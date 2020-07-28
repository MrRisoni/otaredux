import React, { Component } from "react";
import SegmentTabs from "./SegmentTabs";
import { DataContext } from "../../../OtaContext";
import "./preseat.css";
import PaxSelector from "./PaxSelector";
const seatMaps = require("../../../../resources/seatMapLayout.json");

class PreSeat extends Component {
  render() {
    return (
      <main>
        <PaxSelector/>
        <SegmentTabs seat_map_data={seatMaps} />
      </main>
    );
  }
}

export default PreSeat;
