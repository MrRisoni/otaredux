import React, { Component } from 'react';
import InsuranceOption from './InsuranceOption';
import {DataContext} from "../../../OtaContext";


class Insurance extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);

    this.state = {
      checkedInsurance: 0,
    };

    this.handleOptionsChange = this.handleOptionsChange.bind(this);
  }

  handleOptionsChange(optionId) {
    const self = this;
    self.setState({ checkedInsurance: optionId });

    this.context.functions.purchaseInsurance({
      pax: this.props.pax,
      insuranceId: optionId,
    });
  }

  render() {
    return (
      <section>
        <div className="insuranceCard">

          <div className="alert alert-success" role="alert">
            <div className="row">


              <div className="col-6">

                            Select an Insurance
              </div>
              <div className="col-2">
                <i className="fas fa-ambulance" />
              </div>


              <div className="col-2">
                <button
                  className="btn btn-sm btn-dark btn-block btnToggle"
                  data-toggle="collapse"
                  data-target={`#insuranceCollapse${this.props.paxId}`}
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >

                               general.Toggle
                </button>
              </div>

            </div>
          </div>


          <div className="collapse" id={`insuranceCollapse${this.props.paxId}`}>

            <div className="row">
              {this.context.InsuranceRsc.map(ins => (
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
