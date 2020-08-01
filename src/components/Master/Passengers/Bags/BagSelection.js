import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";

class BagSelection extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(ev) {
    this.context.functions.actionBag({paxId:this.props.paxId,
      legId:this.props.legId,option:ev['target']['value']});
  }


  render() {
  //  console.log("bag data");
  //  console.log(this.props.bagData);
    let priceOneBags = 0;
    let priceTwoBags = 0;

    //  console.log('this.props.bagData');
    // console.log(this.props.bagData);

    priceOneBags = this.props.bagData.pricing["firstBag"].filter(
      bg => bg.ptc == this.props.ptc
    )[0].costEur;
    priceOneBags *= this.context.currentCurrency.rate;
    priceOneBags = priceOneBags.toFixed(2);

    priceTwoBags += this.props.bagData.pricing["secondBag"].filter(
      bg => bg.ptc == this.props.ptc
    )[0].costEur;
    priceTwoBags *= this.context.currentCurrency.rate;
    priceTwoBags = priceTwoBags.toFixed(2);

    return (
      <div className="row">
        <div className="col-6">
          <select defaultValue="0" className="form-control" onChange={this.handleSelection}>
            <option value="0"></option>
            <option value="1">
              One Bag {priceOneBags} {this.context.currentCurrency.code}
            </option>
            <option value="2">
              Two Bags {priceTwoBags} {this.context.currentCurrency.code}
            </option>
          </select>
        </div>
      </div>
    );
  }
}

export default BagSelection;
