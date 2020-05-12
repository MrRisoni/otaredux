
import React, { Component } from "react";
import SegmentTabs from "./SegmentTabs";
import {DataContext} from "../../../OtaContext";

const seatMaps = require("../../../../resources/seatMapLayout.json");


class PreSeat extends Component {
render() {
  return (
    <main>
      <SegmentTabs seat_map_data={seatMaps} />
    </main>
  );
}
}

export default PreSeat;
