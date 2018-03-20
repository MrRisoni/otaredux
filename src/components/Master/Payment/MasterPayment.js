import React, {Component} from 'react';
import CreditCard from "./CreditCard";

class MasterPayment extends Component {
    render() {
        return (<div className="row paymentDetails">
                <div className="col-md-12">

                    <div className="card">

                        <div className="card-header bg-light">

                            <div className="row">
                                <div className="col-md-6">
                                    Select Payment Method
                                </div>
                                <div className="col-md-2">
                                    <i className="fas fa-credit-card"/>
                                </div>
                            </div>
                        </div>

                        <CreditCard/>


                    {this.props.paymentMethods.map( method => {
                        return(<div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <b>{method.title}</b>
                                    </div>
                                    <div className="col-sm-2 offset-sm-7">
                                        <button className="btn btn-sm btn-dark btn-block btnToggle"
                                                data-toggle="collapse"
                                                data-target={`#payMethodCollapse${method.code}`}
                                                aria-expanded="false" aria-controls="collapseExample">
                                            Toggle
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="card-body paymentLogo collapse" id={`payMethodCollapse${method.code}`}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={method.img} />
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-success">Complete Payment!</button>
                                    </div>
                                </div>
                            </div>
                        </div>);
                    })}

                    </div>
                </div>
            </div>
        )
    }
}

export default MasterPayment;


