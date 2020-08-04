import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";

class InsuranceOption extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.updateOptions(this.props.insData.id);
  }

  render() {
    var price =
      this.props.paxData.ptc == "ADT"
        ? this.props.insData.costEuro.ADT
        : this.props.insData.costEuro.CNN;

    price *= this.context.currentCurrency.rate;
    price = price.toFixed(2);
    return (
      <div className="col-3">
        <div className="card text-center">
          <div className="card-header bg-warning">
            {this.props.insData.title}
          </div>

          <div className="card-body">
            <input
              type="radio"
              value={this.props.insData.id}
              onChange={this.handleChange}
              checked={this.props.selectedOption === this.props.insData.id}
            />
          </div>

          <div className="card-footer">
            {price} {this.context.currentCurrency.code}
          </div>
        </div>
      </div>
    );
  }
}
export default InsuranceOption;
