import React, { Component } from "react";
import InsuranceOption from "./InsuranceOption";
import { DataContext } from "../../../OtaContext";
import ButtonToggle from "../../../Common/ButtonToggle";

class Insurance extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);

    this.state = {
      checkedInsurance: 0
    };

    this.handleOptionsChange = this.handleOptionsChange.bind(this);
  }

  handleOptionsChange(optionId) {
    const self = this;
    self.setState({ checkedInsurance: optionId });

    this.context.functions.purchaseInsurance({
      pax: this.props.pax,
      insuranceId: optionId
    });
  }

  render() {
    return (
      <section>
        <div className="insuranceCard">
          <div className="alert alert-success" role="alert">
            <div className="row">
              <div className="col-6">
               {this.context.translations[this.context.lang].upsales.SelectInsurance}
</div>
              <div className="col-2">
                <i className="fas fa-ambulance" />
              </div>

              <ButtonToggle
                target={`insuranceCollapse${this.props.paxId}`}
                clsName={"offset-6"}
              />
            </div>
          </div>

          <div className="collapse" id={`insuranceCollapse${this.props.paxId}`}>
            <div className="row">
              {this.context.upsalesPricing.Insurance.map(ins => (
                <InsuranceOption
                  key={ins.id}
                  insData={ins}
                  paxData={this.props.pax}
                  updateOptions={this.handleOptionsChange}
                  selectedOption={this.state.checkedInsurance}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Insurance;
