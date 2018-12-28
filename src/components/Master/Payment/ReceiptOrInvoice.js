import React, {Component} from 'react';
import Invoice from "./Invoice";
import Receipt from "./Receipt";
import { Translate } from 'react-redux-i18n';


class ReceiptOrInvoice extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            receipt:true,
            invoice:false
        };


        this.handlePickReceipt = this.handlePickReceipt.bind(this);
        this.handlePickInvoice= this.handlePickInvoice.bind(this);

    }

    handlePickReceipt()
    {

        this.setState({receipt:true,invoice:false})
    }



    handlePickInvoice()
    {
        this.setState({receipt:false,invoice:true})
    }

    render() {



        let listDiv = [];
        this.props.countryList.forEach((val, idx) => {

            listDiv.push(<option key={val.Code} value={val.Code}>{val.Country}</option>);

        });

        return (
            <section>

                <div className="row">
                    <div className="col-8">

                        <div className="card paymentDetails">

                            <div className="card-header">
                                <div className="row">

                                    <div className="col-4">
                                        <Translate value="pay.Details"/>
                                    </div>


                                    <div className="col-2">
                                        <i className="fas fa-file-invoice-dollar"/>
                                    </div>

                                    <div className="col-2 offset-3">
                                        <button className="btn btn-sm btn-dark btn-block btnToggle"
                                                data-toggle="collapse"
                                                data-target="#paymentDetailsCollapse" aria-expanded="false"
                                                aria-controls="collapseExample">
                                           <Translate value="general.Toggle"/>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="card-body collapse show" id="paymentDetailsCollapse">

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="payReceipt"
                                           id="payReceipt" value="payReceipt" checked={this.state.receipt}
                                           onChange={this.handlePickReceipt} />

                                        <label className="form-check-label" htmlFor="payReceipt"/>
                                            <Translate value="pay.Receipt"/>


                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="payInvoice"
                                           id="payInvoice"  value="payInvoice" checked={this.state.invoice}
                                           onChange={this.handlePickInvoice}/>
                                        <label className="form-check-label" htmlFor="payInvoice"/>
                                    <Translate value="pay.Invoice"/>

                                </div>


                                {this.state.receipt &&
                                    <Receipt countryList={listDiv}/>
                                }


                                {this.state.invoice &&
                                    <Invoice countryList={listDiv}/>
                                }

                            </div>


                        </div>


                    </div>
                </div>
            </section>

        );
    }
}

export default ReceiptOrInvoice;


