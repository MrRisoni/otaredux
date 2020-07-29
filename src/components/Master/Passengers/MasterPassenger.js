import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import Error from "../../Common/Error";
import Insurance from "./Insurance/Insurance";

import ValidatePassengers from "../../../ValidatePassengers";
import MasterPassport from "./MasterPassport";
//import MilesCards from './Miles/MilesCards';
import { DataContext } from "../../OtaContext";
import BagComponent from "./Bags/BagComponent";
import MealsComponent from "./Meals/MealsComponent";

class MasterPassenger extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);

    this.state = {
      ageGroup: "ADT",
      cabinClass: "Y",
      surname: "",
      name: "",
      gender: "",
      birthDate: moment(),
      minBirthDate: moment().subtract(150, "years"),
      minInfantBirthDate: moment().subtract(2, "years"),
      minChildBirthDate: moment().subtract(15, "years"),
      minAdultBirthDate: moment().subtract(150, "years"),
      showSurnameErr: false,
      showNameErr: false,
      nameErrMsg: "",
      surNameErrMsg: ""
    };

    this.editSurname = this.editSurname.bind(this);
    this.editName = this.editName.bind(this);
    this.handleAgeGroupChange = this.handleAgeGroupChange.bind(this);
    this.removeMe = this.removeMe.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.changeBirthDate = this.changeBirthDate.bind(this);
  }

  changeBirthDate(date) {
    this.setState({
      birthDate: date
    });
  }

  handleGenderChange(ev) {
    const fieldInput = ev.target.value;

    this.setState({
      gender: fieldInput
    });

    this.context.functions.editPassenger(
      {paxId:this.props.passenger.id,
        gender:fieldInput,
        field:'gender'
      }); 

    
  }

  handleAgeGroupChange(ev) {
    const data = {
      paxId: this.props.passenger.id,
      newPtc: ev.target.value,
      oldPtc: this.props.passenger.ptc,
      field:'ptc',
    };

    this.context.functions.editPassenger(data);

    let minDate = "";
    switch (ev.target.value) {
      case "ADT":
        minDate = this.state.minAdultBirthDate;
        break;
      case "CNN":
        minDate = this.state.minChildBirthDate;
        break;
      case "INF":
        minDate = this.state.minInfantBirthDate;
        break;
    }

    this.setState({
      minBirthDate: minDate,
      ageGroup: ev.target.value
    });
  }

  removeMe() {
    this.context.functions.removePassenger(this.props.passenger.id);
  }

  editSurname(ev) {
    const fieldInput = ev.target.value.toUpperCase();

    const VP = new ValidatePassengers();
    const valResult = VP.validateNameSurname(fieldInput);

    this.setState({
      showSurnameErr: !valResult.valid,
      surNameErrMsg: valResult.reasonCode,
      surname: fieldInput
    });

    this.context.functions.editPassenger(
      {paxId:this.props.passenger.id,
        surname:fieldInput,
        field:'surname'
      }); 

     }

  editName(ev) {
    const fieldInput = ev.target.value.toUpperCase();

    const VP = new ValidatePassengers();
    const valResult = VP.validateNameSurname(fieldInput);

    this.setState({
      showNameErr: !valResult.valid,
      nameErrMsg: valResult.reasonCode,
      name: fieldInput
    });

    this.context.functions.editPassenger(
      {paxId:this.props.passenger.id,
        name:fieldInput,
        field:'name'
      });

  }

  render() {
    let ptcOptions = [];
    ptcOptions.push(
      <option key="ADT" value="ADT">
        Adult
      </option>
    );
    if (this.context.functions.getActivePaxesLen() > 1) {
      ptcOptions.push(
        <option key="CNN" value="CNN">
          Child
        </option>
      );
      ptcOptions.push(
        <option key="INF" value="INF">
          Infant
        </option>
      );
    }

    return (
      <section>
        <div className="row passengerCompo show passengerListCollapse">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-header">
                <div className="row">
                  <div className="col-2">
                    Passenger #{this.props.passenger.humanId}
                  </div>

                  <div className="col-4">
                    <select
                      defaultValue="ADT"
                      className="form-control"
                      onChange={this.handleAgeGroupChange}
                    >
                      <option key="" value="">
                        Select Type
                      </option>
                      {ptcOptions}
                    </select>
                  </div>

                  <div className="col-3">
                    <select
                      className="form-control"
                      onChange={this.handleGenderChange}
                    >
                      <option key="" value="">
                        Select Gender
                      </option>
                      <option key="M" value="M">
                        Male
                      </option>
                      <option key="F" value="F">
                        Female
                      </option>
                    </select>
                  </div>

                  <div className="col-2 offset-1">
                    <button
                      className="btn btn btn-dark btn-block btnToggle"
                      data-toggle="collapse"
                      data-target={`#passengerCollapse${this.props.passenger.id}`}
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Toggle
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="card-body collapse show"
                id={`passengerCollapse${this.props.passenger.id}`}
              >
                <div className="row">
                  <br />

                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="Name"
                      id={`#paxName${this.props.passenger.id}`}
                      value={this.state.name}
                      onChange={this.editName}
                      className="form-control"
                    />
                    <Error
                      show={this.state.showNameErr}
                      class="textInputErr"
                      msg={this.state.nameErrMsg}
                    />
                  </div>

                  <div className="col-6">
                    <input
                      type="text"
                      placeholder="Surname"
                      id={`#paxSurname${this.props.passenger.id}`}
                      value={this.state.surname}
                      onChange={this.editSurname}
                      className="form-control"
                    />
                    <Error
                      show={this.state.showSurnameErr}
                      class="textInputErr"
                      msg={this.state.surNameErrMsg}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <DatePicker
                      className="form-control"
                      dateFormat="d MMM YYYY"
                      minDate={this.state.minBirthDate}
                      selected={this.state.birthDate}
                      onChange={this.changeBirthDate}
                    />
                  </div>
                </div>

                <MasterPassport paxId={this.props.passenger.id} />

                {/*
                {(this.state.ageGroup !== 'INF')
                                && <MilesCards />
                                }
*/}

                <div>
                  <div className="alert alert-info" role="alert">
                    Pick extra upsales your trip!
                  </div>

                  {this.props.passenger.ptc !== "INF" && (
                    <Insurance pax={this.props.passenger} />
                  )}

                  {this.props.passenger.ptc !== "INF" && (
                    <BagComponent
                      paxId={this.props.passenger.id}
                      ptc={this.props.passenger.ptc}
                    />
                  )}

                  {this.props.passenger.ptc !== "INF" && <MealsComponent />}
                </div>
              </div>

              {this.context.functions.getActivePaxesLen() > 1 && (
                <div className="card-footer">
                  <div className="row">
                    <div className="col-4 offset-4">
                      <button
                        className="btn btn-primary btn btn-danger"
                        onClick={this.removeMe}
                      >
                        Remove Passenger
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MasterPassenger;
