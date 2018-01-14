import React, {Component} from 'react';

class BusContact extends Component {
    render() {
        return (

            <div className="row contactDetails">
                <div className="col-md-12">

                    <div className="card">
                        <div className="card-header bg-light">Contact Details</div>
                        <div className="card-body">


                            <div className="row">

                                <div className="col-md-2">
                                    <select className="form-control">
                                        <option></option>
                                        <option value="MR">Male</option>
                                        <option value="MS">Female</option>
                                    </select>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Surname"
                                           className="form-control"/>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Name"
                                           className="form-control"/>
                                </div>


                            </div>

                            <br/>


                            <div className="row">
                                <div className="col-md-2">
                                    <input type="text" placeholder="Prefix"
                                           className="form-control"/>
                                </div>

                                <div className="col-md-5">
                                    <input type="text" placeholder="Mobile"
                                           className="form-control"/>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Email"
                                           className="form-control"/>
                                </div>

                            </div>

                            <br/>

                            <div className="row">
                                <div className="col-md-5">
                                    <select className="form-control">
                                        <option>Select Country</option>
                                        <option value="GR">Greece</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="City"
                                           className="form-control"/>
                                </div>
                            </div>


                            <br/>


                            <div className="row">
                                <div className="col-md-5">
                                    <input type="text" placeholder="Address"
                                           className="form-control"/>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" placeholder="Post code"
                                           className="form-control"/>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>)
    }
}

export default BusContact;


