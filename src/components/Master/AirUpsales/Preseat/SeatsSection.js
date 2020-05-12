import React, { Component } from "react";
import SeatButton from "./SeatButton";

class SeatsSection extends Component {
  checkEmergencyExits(data) {
    var seatProps = data.seatProps;
    var seatId = data.seatId;
    var layoutLen = data.layoutLen;
    var hasLeft = 0;
    var hasRight = 0;

    if (seatProps.indexOf("EX") > -1) {
      if (seatId === 0) {
        hasLeft = 1;
      }
      if (seatId === layoutLen - 1) {
        hasRight = 1;
      }
    }
    return { hasLeft, hasRight };
  }

  render() {
    let seatsHtml = [];
    let alphabet = "ABCDEFGHIJK";
    let btnKey = "";
    let layout = this.props.data.layoutStr;
    var pricingKey = this.props.data.pricingKey;

    var exitClass = "";

    for (var rowsObj of this.props.data.rows) {
      var seatsData = rowsObj.seats;
      let colsHtml = [];

      for (let seatId = 0; seatId < layout.length; seatId++) {
        var showRowId = 0;
        if (
          seatId > 0 &&
          layout[seatId] === "A" &&
          layout[seatId + 1] === "A"
        ) {
          showRowId = 1;
        }
        var el = [];
        var tooltip = [];

        if (seatsData[seatId].props.indexOf("LG") > -1) {
          el.push("seatLegRoom");
          tooltip.push("LG");
        }

        if (seatsData[seatId].free === 0) {
          el = []; // top priority not available
          el.push("seatNotAvailable");
        }

        if (seatsData[seatId].props.indexOf("NO") > -1) {
          tooltip = el = []; // top priority not available
          el.push("seatNotExists");
        }

        var exits = this.checkEmergencyExits({
          seatProps: seatsData[seatId].props,
          layoutLen: layout.length,
          seatId: seatId
        });

        if (exits.hasLeft == 1) {
          exitClass = " emergencyExit emergencyLeft";
          tooltip.push("EX");
          colsHtml.push(
            <div key={this.props.data.sectionId} className={exitClass}></div>
          );
        }

        if (exits.hasRight == 1) {
          tooltip.push("EX");
        }

        btnKey =
          "stBtn_" +
          "sectid_" +
          this.props.data.sectionId +
          "_rw_" +
          rowsObj.rowId +
          "_col_" +
          alphabet[seatId];

        colsHtml.push(
          <SeatButton
            key={btnKey}
            tooltips={tooltip}
            segId={this.props.segId}
            colName={alphabet[seatId]}
            seatContextClasses={el}
            pricingKey={pricingKey}
            rowId={rowsObj.rowId}
          />
        );

        if (exits.hasRight == 1) {
          exitClass = " emergencyExit emergencyRight";

          colsHtml.push(<div className={exitClass}></div>);
        }

        if (showRowId > 0) {
          colsHtml.push(
            <span className="row-number">
              <p>{rowsObj.rowId}</p>
            </span>
          );
        }
      }
      seatsHtml.push(<div className="row seatsHorRow">{colsHtml}</div>);
    } // end rows iteration
    return <section className="segmentMap">{seatsHtml}</section>;
  }
}
export default SeatsSection;
