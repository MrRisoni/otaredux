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
                      <div className="col-6">
                      {this.context.translations[this.context.lang].general.Contact}
                      </div>

                      <div className="col-2">
                        <i className="fas fa-phone" />
                      </div>

                      <ButtonToggle
                        target={`busContactCollapse`}
                        clsName={"offset-2"}
                      />
                    </div>
                  </div>

                  <div
                    className="card-body collapse show"
                    id="busContactCollapse"
                  >
                    <div className="row">
                      <div className="col-2">
                      <label htmlFor={`paxContactGender`}>{this.context.translations[this.context.lang].passport.dob}</label>
                        <select className="form-control" id="paxContactGender">
                          <option />
                          <option value="MR">{this.context.translations[this.context.lang].passengers.Male}
</option>
                          <option value="MS">{this.context.translations[this.context.lang].passengers.Female}
</option>
                        </select>
                      </div>

                      <div className="col-5">
                      <label htmlFor="contactSurName">{this.context.translations[this.context.lang].passengers.Surname}</label>
                        <input
                          type="text"  id="contactSurName"
                          placeholder={this.context.translations[this.context.lang].passengers.Surname}
                          value={this.context.contactData.surname}
                          onChange={this.handleSurname}
                          className="form-control"
                        />
                      </div>

                      <div className="col-5">
                      <label htmlFor="contactName">{this.context.translations[this.context.lang].passengers.Name}</label>
                        <input
                          type="text" id="contactName"
                          placeholder={this.context.translations[this.context.lang].passengers.Name}
                          value={this.context.contactData.name}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-2">
                      <label htmlFor="contactPrefix">{this.context.translations[this.context.lang].passengers.Surname}</label>
                        <input
                         id="contactPrefix"
                          type="text"
                          placeholder="Prefix"
                          className="form-control"
                        />
                      </div>

                      <div className="col-5">
                      <label htmlFor="contactMobile">{this.context.translations[this.context.lang].passengers.Mobile}</label>
                        <input
                          type="text"  id="contactMobile"
                          placeholder={this.context.translations[this.context.lang].passengers.Mobile}
                          className="form-control"
                        />
                      </div>

                      <div className="col-5">
                      <label htmlFor="contactEmail">Email</label>
                        <input
                          type="text"  id="contactEmail"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-5">
                      <label htmlFor="contactCountry">{this.context.translations[this.context.lang].passengers.City}</label>
                        <select className="form-control" id="contactCountry">
                          <option>Select Country</option>
                          {this.props.countryList.map((val, idx) => (
                            <option key={val.Code} value={val.Code}>
                              {val.Country}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-5">
                      <label htmlFor="contactCity">{this.context.translations[this.context.lang].passengers.City}</label>
                        <input
                          type="text"  id="contactCity"
                          placeholder={this.context.translations[this.context.lang].passengers.City}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-5">
                      <label htmlFor="contactAddress">{this.context.translations[this.context.lang].passengers.Address}</label>
                        <input
                          type="text" id="contactAddress"
                          placeholder={this.context.translations[this.context.lang].passengers.Address}
                          className="form-control"
                        />
                      </div>
                      <div className="col-4">
                      <label htmlFor="contactPostCode">{this.context.translations[this.context.lang].passengers.ZIP}</label>
                        <input
                          type="text"   id="contactPostCode"
                          placeholder={this.context.translations[this.context.lang].passengers.ZIP}
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
