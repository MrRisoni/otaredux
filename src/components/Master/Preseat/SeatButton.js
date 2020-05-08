import React, { Component } from "react";
import {DataContext} from "../../OtaContext";

class SeatButton extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.context.functions.pickSeat({
      row: this.props.rowId,
      col: this.props.colName,
      segId: this.props.segId,
      pricingKey: this.props.pricingKey
    });
  }
  render() {
    let {
      passengers,
      pricingInfo,
      currentCurrency,
      translations,
      currentLang
    } = this.context;

    let seatProperties = this.props.seatContextClasses.join(" ");
    let clsName = "btn seatBtn btn-sm btn-primary " + seatProperties;

    var seatId = this.props.rowId + this.props.colName;
    var isChosen = false;
    for (var p = 0; p < passengers.length; p++) {
      var selSeat =0;// passengers[p].selection[this.props.segId]["chosen"];

      if (selSeat === seatId) {
        isChosen = true;
        break;
      }
    }

    if (isChosen) {
      clsName += " seatChosen ";
    }
    var tip ='';// [pricingInfo[this.props.pricingKey] + " " + currentCurrency.code];
    if (this.props.tooltips.indexOf("LG") > -1) {
      //tip.push(translations[currentLang].LG);
    }
    if (this.props.tooltips.indexOf("EX") > -1) {
    //  tip.push(translations[currentLang].EX);
    }
    return (
      <span>
        <div
          className={clsName}
          data-toggle="tooltip"
          data-placement="top"
          title={tip.join(" ")}
          onClick={this.handleClick}
        >
          {this.props.colName}
        </div>
      </span>
    );
  }
}

export default SeatButton;
