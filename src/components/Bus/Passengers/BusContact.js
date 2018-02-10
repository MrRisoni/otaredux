import React, {Component} from 'react';

class BusContact extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.liftState = this.liftState.bind(this);
        this.handleSurname = this.handleSurname(this);
    }

    liftState()
    {
        this.props.editContactHandler({
            surname: 'surname',
            name:  'name',
            gender: 'gender',
            prefix: 'contactData.prefix',
            mobile:'contactData.mobile',
            email: 'contactData.email',
            country:'contactData.country',
            city: 'contactData.city',
            address:'contactData.address',
            postcode:'contactData.postcode'
        })
    }

    handleSurname(ev)
    {
        this.liftState();
    }

    handleName(ev)
    {

    }


    render() {
        return (

            <div className="row contactDetails">
                <div className="col-md-12">

                    <div className="card">
                        <div className="card-header bg-light">

                            <div className="row">

                                <div className="col-sm-3">
                                    Contact Details
                                </div>

                                <div className="col-sm-2 offset-sm-7">
                                    <button className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target="#busContactCollapse" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        Toggle
                                    </button>
                                </div>

                            </div>
                        </div>


                        <div className="card-body collapse show" id="busContactCollapse">


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
                                           value={this.props.contact.surname}
                                           onChange={this.handleSurname}
                                           className="form-control"/>
                                </div>


                                <div className="col-md-5">
                                    <input type="text" placeholder="Name"
                                           value={this.props.contact.name}
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


