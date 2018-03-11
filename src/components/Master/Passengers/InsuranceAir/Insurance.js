import React, {Component} from 'react';


class Insurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedInsurance: 1
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);

    }

    handleOptionChange(ev) {
        var self = this;
        console.log(ev.target.value);

        self.setState({checkedInsurance: ev.target.value});

    }

    render() {
        return (

            <div className="insuranceCard">

                <div className="alert alert-success" role="alert">
                    <div className="row">


                        <div className="col-md-8">
                            Select an Insurance
                        </div>
                        <div className="col-md-2">
                            <i className="fas fa-ambulance"/>
                        </div>


                        <div className="col-md-2">
                            <button className="btn btn-sm btn-dark btn-block btnToggle"
                                    data-toggle="collapse"
                                    data-target={`#insuranceCollapse${this.props.passengerid}`}
                                    aria-expanded="false" aria-controls="collapseExample">
                                Toggle
                            </button>
                        </div>

                    </div>
                </div>


                <div className="collapse" id={`insuranceCollapse${this.props.passengerid}`}>

                    <div className="row">
                        {this.props.insurances.map((ins) => {

                            return (<div key={ins.id} className="col-md-3">

                                <div className="card text-center">
                                    <div className="card-header bg-warning">{ins.title}</div>

                                    <div className="card-body">
                                        ins.description

                                        <input type="radio" value={ins.id}
                                               onChange={this.handleOptionChange}
                                               checked={this.state.checkedInsurance == ins.id}/>

                                    </div>

                                    <div className="card-footer">
                                        {ins.price} {this.props.currency.code}
                                    </div>
                                </div>

                            </div>);
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default Insurance;


