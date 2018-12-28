import React, {Component} from 'react';
import { Translate } from 'react-redux-i18n';


class MasterContact extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.liftState = this.liftState.bind(this);
        this.handleSurname = this.handleSurname(this);
    }

    liftState() {
        this.props.editContactHandler({
            surname: 'surname',
            name: 'name',
            gender: 'gender',
            prefix: 'contactData.prefix',
            mobile: 'contactData.mobile',
            email: 'contactData.email',
            country: 'contactData.country',
            city: 'contactData.city',
            address: 'contactData.address',
            postcode: 'contactData.postcode'
        })
    }

    handleSurname(ev) {
        this.liftState();
    }

    handleName(ev) {

    }


    render() {

        var listDiv = [];
        this.props.countryList.forEach((val, idx) => {

            listDiv.push(<option key={val.Code} value={val.Code}>{val.Country}</option>);

        });

        return (
            <section>
            <div className='row'>
                <div className='col-8'>

                    <div className="row contactDetails">
                        <div className="col-12">

                            <div className="card">
                                <div className="card-header bg-light">

                                    <div className="row">

                                        <div className="col-3">
                                            Contact Details
                                        </div>

                                        <div className="col-2 offset-6">
                                            <button className="btn btn-sm btn-dark btn-block btnToggle"
                                                    data-toggle="collapse"
                                                    data-target="#busContactCollapse" aria-expanded="false"
                                                    aria-controls="collapseExample">
                                               <Translate value="general.Toggle"/>
                                            </button>
                                        </div>

                                    </div>
                                </div>


                                <div className="card-body collapse show" id="busContactCollapse">


                                    <div className="row">

                                        <div className="col-2">
                                            <select className="form-control">
                                                <option></option>
                                                <option value="MR">Male</option>
                                                <option value="MS">Female</option>
                                            </select>
                                        </div>


                                        <div className="col-5">
                                            <input type="text" placeholder="Surname"
                                                   value={this.props.contact.surname}
                                                   onChange={this.handleSurname}
                                                   className="form-control"/>
                                        </div>


                                        <div className="col-5">
                                            <input type="text" placeholder="Name"
                                                   value={this.props.contact.name}
                                                   className="form-control"/>
                                        </div>


                                    </div>

                                    <br/>


                                    <div className="row">
                                        <div className="col-2">
                                            <input type="text" placeholder="Prefix"
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-5">
                                            <input type="text" placeholder="Mobile"
                                                   className="form-control"/>
                                        </div>


                                        <div className="col-5">
                                            <input type="text" placeholder="Email"
                                                   className="form-control"/>
                                        </div>

                                    </div>

                                    <br/>

                                    <div className="row">
                                        <div className="col-5">
                                            <select className="form-control">
                                                <option>Select Country</option>
                                                {listDiv}
                                            </select>
                                        </div>


                                        <div className="col-5">
                                            <input type="text" placeholder="City"
                                                   className="form-control"/>
                                        </div>
                                    </div>


                                    <br/>


                                    <div className="row">
                                        <div className="col-5">
                                            <input type="text" placeholder="Address"
                                                   className="form-control"/>
                                        </div>
                                        <div className="col-4">
                                            <input type="text" placeholder="Post code"
                                                   className="form-control"/>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>)
    }
}

export default MasterContact;


