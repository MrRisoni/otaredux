import React, {Component} from 'react';
import InsuranceOption from "./InsuranceOption";


class Insurance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedInsurance: 0
        };

        this.handleOptionsChange = this.handleOptionsChange.bind(this);

    }

    handleOptionsChange(optionId) {
        var self = this;
        self.setState({checkedInsurance: optionId});

        this.props.selectInsuranceHandler({
            paxId : this.props.paxId,
            insuranceId: optionId
        });
    }

    render() {
        return (

            <div className="insuranceCard">

                <div className="alert alert-success" role="alert">
                    <div className="row">


                        <div className="col-md-6">
                            Select an Insurance
                        </div>
                        <div className="col-md-2">
                            <i className="fas fa-ambulance"/>
                        </div>


                        <div className="col-md-2">
                            <button className="btn btn-sm btn-dark btn-block btnToggle"
                                    data-toggle="collapse"
                                    data-target={`#insuranceCollapse${this.props.paxId}`}
                                    aria-expanded="false" aria-controls="collapseExample">
                                Toggle
                            </button>
                        </div>

                    </div>
                </div>


                <div className="collapse" id={`insuranceCollapse${this.props.paxId}`}>

                    <div className="row">
                        {this.props.insurances.map( ins => {

                            return (<InsuranceOption  key={ins.id} insData ={ins}
                                                      updateOptions={this.handleOptionsChange}
                                                      selectedOption={this.state.checkedInsurance}
                                                      currency={this.props.currency}
                            />)
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default Insurance;


