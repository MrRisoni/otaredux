import React, { Component } from "react";
import SegmentTabs from "./SegmentTabs";
import { DataContext } from "../../../OtaContext";
import "./preseat.css";
import PaxSelector from "./PaxSelector";
import ButtonToggle from "../../../Common/ButtonToggle";

const seatMaps = require("../../../../resources/seatMapLayout.json");


class PreSeat extends Component {
  render() {
    return (
     
      <section className="upsalesSection">
        <div className="row">
          <div className="col-8">
            <div className="card">
             
              <div className="card-header bg-light">
                <div className="row">
                  <div className="col-9">PreSeat</div>

                  <ButtonToggle target={"PreSeatCollapse"} />
                </div>
              </div>
              <div className="card-body collapse" id="PreSeatCollapse">
                  <PaxSelector/>
                  <SegmentTabs seat_map_data={seatMaps} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PreSeat;
