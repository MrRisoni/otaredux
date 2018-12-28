import React from 'react';
import { Translate } from 'react-redux-i18n';

const CreditCard = (props) => {
    return (

        <section>

            <div className="row">
                <div className="col-8">

                    <div className="card paymentDetails">

                        <div className="card-header bg-light">

                            <div className="row">

                                <div className="col-4">
                                    <Translate value="pay.CreditCard"/>
                                </div>


                                <div className="col-2">
                                    <i className="far fa-credit-card"/>
                                </div>


                                <div className="col-2 offset-3">
                                    <button className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target="#creditCardCollapse" aria-expanded="false"
                                            aria-controls="collapseExample">
                                       <Translate value="general.Toggle"/>
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="card-body collapse show" id="creditCardCollapse">

                            <div className="row">

                                <div className="col-4">
                                    <select className="form-control">
                                        <option></option>
                                        <option value="">Visa Debit</option>
                                        <option value="">Visa Credit</option>
                                        <option value="">Mastercard Debit</option>
                                        <option value="">Mastercard Credit</option>
                                    </select>
                                </div>


                                <div className="col-5">
                                    <input type="text" placeholder="Card Number"
                                           className="form-control"/>
                                </div>
                            </div>

                            <br/>

                            <div className="row">
                                <div className="col-4">
                                    <input type="text" placeholder="Bank Name"
                                           className="form-control"/>
                                </div>

                                <div className="col-6">
                                    <input type="text" placeholder="Card Holder"
                                           className="form-control"/>
                                </div>


                                <div className="col-2">
                                    <input type="text" placeholder="CVV2"
                                           className="form-control"/>
                                </div>
                            </div>

                            <br/>

                            <div className="row">
                                <div className="col-4 offset-4">
                                    <button className="btn btn-success">Complete Payment!</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
};

export default CreditCard;
