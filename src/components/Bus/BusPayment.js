import React, {Component} from 'react';

class BusPayment extends Component {
    render() {
        return (<div className="row paymentDetails">
                <div className="col-md-12">

                    <div className="card">
                        <div className="card-header  bg-light"> Payment Details</div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-4">
                                    <select className="form-control">
                                        <option></option>
                                        <option value="">Visa Debit</option>
                                        <option value="">Visa Credit</option>
                                        <option value="">Mastercard Debit</option>
                                        <option value="">Mastercard Credit</option>
                                    </select>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Card Number"
                                           className="form-control"/>
                                </div>
                            </div>

                            <br/>

                            <div className="row">
                                <div className="col-md-4">
                                    <input type="text" placeholder="Bank Name"
                                           className="form-control"/>
                                </div>

                                <div className="col-md-6">
                                    <input type="text" placeholder="Card Holder"
                                           className="form-control"/>
                                </div>


                                <div className="col-md-2">
                                    <input type="text" placeholder="CVV2"
                                           className="form-control"/>
                                </div>
                            </div>

                            <br/>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusPayment;


