import React from 'react';

const CreditCard = function (props) {
    return (


        <div className="card paymentDetails">

            <div className="card-header bg-light">

                <div className="row">

                    <div className="col-sm-3">
                        <b>Credit Card</b>
                    </div>

                    <div className="col-sm-2 offset-sm-7">
                        <button className="btn btn-sm btn-dark btn-block btnToggle"
                                data-toggle="collapse"
                                data-target="#creditCardCollapse" aria-expanded="false"
                                aria-controls="collapseExample">
                            Toggle
                        </button>
                    </div>

                </div>
            </div>

            <div className="card-body collapse show" id="creditCardCollapse">

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

                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <button className="btn btn-success">Complete Payment!</button>
                    </div>
                </div>


            </div>

        </div>
    )
};

export default CreditCard;
