import React, {Component} from 'react';

class ReceiptOrInvoice extends Component {
    render() {
        return (
            <section>

                <div className='row'>
                    <div className='col-8'>

                        <div className="card paymentDetails">

                            <div className="card-header">
                                Payment Details
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>


                        </div>


                    </div>
                </div>
            </section>

        );
    }
}

export default ReceiptOrInvoice;


