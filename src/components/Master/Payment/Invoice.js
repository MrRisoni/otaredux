import React, {Component} from 'react';

class Invoice extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Receipt Details
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="birthday">Company Name</label>
                            <input type="text" placeholder="Company Name" className="form-control"/>

                        </div>

                        <div className="col-6">
                            <label htmlFor="birthday">Profession</label>
                            <input type="text" placeholder="Profession" className="form-control"/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="birthday">Address</label>
                            <input type="text" placeholder="Address" className="form-control"/>

                        </div>

                        <div className="col-6">
                            <label htmlFor="birthday">City</label>
                            <input type="text" placeholder="Phone" className="form-control"/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="birthday">Country</label>
                            <select className="form-control">
                                <option>Select Country</option>
                                {this.props.listDiv}
                            </select>

                        </div>

                        <div className="col-6">
                            <label htmlFor="birthday">Zip Code</label>
                            <input type="text" placeholder="Zip Code" className="form-control"/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="birthday">VAT</label>
                            <input type="text" placeholder="VAT" className="form-control"/>
                        </div>

                        <div className="col-6">
                            <label htmlFor="birthday">Phone</label>
                            <input type="text" placeholder="Phone" className="form-control"/>
                        </div>
                    </div>




                </div>
            </div>


        );
    }
}

export default Invoice;


