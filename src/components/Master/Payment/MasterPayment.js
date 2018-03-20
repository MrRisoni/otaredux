import React, {Component} from 'react';
import CreditCard from "./CreditCard";

class MasterPayment extends Component {
    render() {
        return (<div className="row paymentDetails">
                <div className="col-md-12">

                    <div className="card">

                        <div className="card-header bg-light">

                            <div className="row">

                                <div className="col-sm-3">
                                    Select Payment Method
                                </div>

                            </div>
                        </div>


                       <CreditCard/>



                    {this.props.paymentMethods.map( method => {
                        return(<div className="card">
                            <div className="card-header">
                                <b>{method.title}</b>
                            </div>
                            <div className="card-body paymentLogo">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="https://pbs.twimg.com/profile_images/917661388822208512/4XX3jcH5_400x400.jpg" />
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


