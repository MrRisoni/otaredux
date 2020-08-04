import React, { Component } from "react";
import { DataContext } from "../../OtaContext";
import ButtonToggle from "../../Common/ButtonToggle";

class MasterContact extends Component {
  static contextType = DataContext;

  handleSurname(ev) {}

  handleName(ev) {}

  render() {
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
                        {
                          this.context.translations[this.context.lang].passport
                            .nationality
                        }
                        general.Contact"
                      </div>

                      <div className="col-2">
                        <i className="fas fa-phone" />
                      </div>

                      <ButtonToggle
                    target={`busContactCollapse`}
                    clsName={"offset-6"}
                  />

                      
                    </div>
                  </div>

                  <div
                    className="card-body collapse show"
                    id="busContactCollapse"
                  >
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
                          type="text"
                          placeholder="Surname"
                          value={this.context.contactData.surname}
                          onChange={this.handleSurname}
                          className="form-control"
                        />
                      </div>

                      <div className="col-5">
                        <input
                          type="text"
                          placeholder="Name"
                          value={this.context.contactData.name}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-2">
                        <input
                          type="text"
                          placeholder="Prefix"
                          className="form-control"
                        />
                      </div>

                      <div className="col-5">
                        <input
                          type="text"
                          placeholder="Mobile"
                          className="form-control"
                        />
                      </div>

                      <div className="col-5">
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-5">
                        <select className="form-control">
                          <option>Select Country</option>
                          {this.props.countryList.map((val, idx) => (
                            <option key={val.Code} value={val.Code}>
                              {val.Country}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-5">
                        <input
                          type="text"
                          placeholder="City"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-5">
                        <input
                          type="text"
                          placeholder="Address"
                          className="form-control"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder="Post code"
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
      </section>
    );
  }
}

export default MasterContact;
