import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import {DataContext} from "../DataContext";


class MasterContact extends Component {

    static contextType = DataContext;


  handleSurname(ev) {
  }

  handleName(ev) {

  }


  render() {
    const listDiv = [];
    this.props.countryList.forEach((val, idx) => {
      listDiv.push(<option key={val.Code} value={val.Code}>{val.Country}</option>);
    });

    console.log('this.context.lang ' + this.context.lang);


    return (
      <section>
        <div className="row">
          <div className="col-8">

            <div className="row contactDetails">
              <div className="col-12">

                <div className="card">
                  <div className="card-header bg-light">

                    <div className="row">

                      <div className="col-4">
                          {this.context.translations[this.context.lang].passport.nationality}
                            <Translate value="general.Contact"  />

                          </div>

                      <div className="col-2">
                            <i className="fas fa-phone" />
                          </div>


                      <div className="col-2 offset-3">
                            <button
                                className="btn btn-sm btn-dark btn-block btnToggle"
                                data-toggle="collapse"
                                data-target="#busContactCollapse" aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                <Translate value="general.Toggle" />
                              </button>
                          </div>

                    </div>
                  </div>


                  <div className="card-body collapse show" id="busContactCollapse">


                    <div className="row">

                      <div className="col-2">
                            <select className="form-control">
                                <option />
                                <option value="MR">Male</option>
                                <option value="MS">Female</option>
                              </select>
                          </div>


                      <div className="col-5">
                            <input
                                type="text" placeholder="Surname"
                                value={this.context.contactData.surname}
                                onChange={this.handleSurname}
                                className="form-control"
                              />
                          </div>


                      <div className="col-5">
                            <input
                                type="text" placeholder="Name"
                                value={this.context.contactData.name}
                                className="form-control"
                              />
                          </div>


                    </div>

                    <br />


                    <div className="row">
                      <div className="col-2">
                            <input
                                type="text" placeholder="Prefix"
                                className="form-control"
                              />
                          </div>

                      <div className="col-5">
                            <input
                                type="text" placeholder="Mobile"
                                className="form-control"
                              />
                          </div>


                      <div className="col-5">
                            <input
                                type="text" placeholder="Email"
                                className="form-control"
                              />
                          </div>

                    </div>

                    <br />

                    <div className="row">
                      <div className="col-5">
                            <select className="form-control">
                                <option>Select Country</option>
                                {listDiv}
                              </select>
                          </div>


                      <div className="col-5">
                            <input
                                type="text" placeholder="City"
                                className="form-control"
                              />
                          </div>
                    </div>


                    <br />


                    <div className="row">
                      <div className="col-5">
                            <input
                                type="text" placeholder="Address"
                                className="form-control"
                              />
                          </div>
                      <div className="col-4">
                            <input
                                type="text" placeholder="Post code"
                                className="form-control"
                              />
                          </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}

export default MasterContact;
