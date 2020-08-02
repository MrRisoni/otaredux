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
      ptc:this.props.ptc,
      legId:this.props.legId,option:ev['target']['value']});
  }


  render() {

    const pricesOfBags =  this.context.functions.getBagPrices({legId:this.props.legId, ptc:this.props.ptc});

  let priceOneBags =  pricesOfBags.priceOneBags;
  let priceTwoBags =  pricesOfBags.priceTwoBags;

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
