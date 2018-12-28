import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import Error from '../../Common/Error';

import ValidatePassengers from '../../../ValidatePassengers';
import MasterPassport from "./MasterPassport";
import Insurance from './Insurance/Insurance';
import BagComponent from './Bags/BagComponent';
import MealsComponent from './Meals/MealsComponent';
import MilesCards from './Miles/MilesCards';
import {CHANGE_PASSENGER_AIR_CABIN} from "../../../actions/master/actionsMaster";
import CabinTrip from "./Cabin/CabinTrip";
import MasterPassengerList from "./MasterPassengerList";


class MasterPassenger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ageGroup: 'ADT',
            cabinClass: 'Y',
            surname: '',
            name: '',
            gender: '',
            birthDate: moment(),
            minBirthDate: moment().subtract(150, 'years'),
            minInfantBirthDate: moment().subtract(2, 'years'),
            minChildBirthDate: moment().subtract(15, 'years'),
            minAdultBirthDate: moment().subtract(150, 'years'),
            showSurnameErr: false,
            showNameErr: false
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

        this.props.editNameHandler(this.props.passenger.id, this.state.surname, this.state.name, fieldInput);


    }


    handleAgeGroupChange(ev) {
        this.props.editPaxHandler(this.props.passenger.id, ev.target.value, this.props.passenger.type);

        let minDate = '';
        switch (ev.target.value) {
            case 'ADT':
                minDate = this.state.minAdultBirthDate;
                break;
            case 'CNN':
                minDate = this.state.minChildBirthDate;
                break;
            case 'INF':
                minDate = this.state.minInfantBirthDate;
                break;
        }


        this.setState({
            minBirthDate: minDate,
            ageGroup: ev.target.value
        });

    }

    removeMe() {
        this.props.removePaxHandler(this.props.passenger.id, this.props.passenger.type);
    }


    editSurname(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        const VP = new ValidatePassengers();

        this.setState({
            showSurnameErr: !VP.validateNameSurname(fieldInput),
            surname: fieldInput
        });


        this.props.editNameHandler(this.props.passenger.id, fieldInput, this.state.name, this.state.gender);

    }


    editName(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        const VP = new ValidatePassengers();

        this.setState({
            showNameErr: !VP.validateNameSurname(fieldInput),
            name: fieldInput
        });

        this.props.editNameHandler(this.props.passenger.id, this.state.surname, fieldInput, this.state.gender);

    }

    render() {
        return (
            <section>
                <div className="row passengerCompo show passengerListCollapse">
                    <div className="col-12">


                        <div className="card bg-light">
                            <div className="card-header">

                                <div className="row">

                                    <div className="col-2">
                                        Passenger # {this.props.passenger.humanId}
                                    </div>

                                    <div className="col-7">
                                        <select className="form-control" onChange={this.handleAgeGroupChange}>
                                            <option key="" value="">Select Type</option>
                                            <option key="ADT" value="ADT"
                                                    selected={'ADT' == this.props.passenger.type}>Adult
                                            </option>
                                            <option key="CNN" value="CNN">Child</option>
                                            <option key="INF" value="INF">Infant</option>
                                        </select>
                                    </div>


                                    <div className="col-2 offset-1">
                                        <button className="btn btn btn-dark btn-block btnToggle"
                                                data-toggle="collapse"
                                                data-target={`#passengerCollapse${this.props.passenger.id}`}
                                                aria-expanded="false"
                                                aria-controls="collapseExample">
                                            Toggle
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="card-body collapse show" id={`passengerCollapse${this.props.passenger.id}`}>


                                <div className="row">


                                    <div className="col-3">
                                        <select className="form-control" onChange={this.handleGenderChange}>
                                            <option key="" value="">Select Gender</option>
                                            <option key="M" value="M">Male</option>
                                            <option key="F" value="F">Female</option>
                                        </select>
                                    </div>


                                </div>


                                <div className="row">

                                    <br/>

                                    <div className="col-5">
                                        <input type="text" placeholder="Name" id={`#paxName${this.props.passenger.id}`}
                                               value={this.state.name}
                                               onChange={this.editName} className="form-control"/>
                                        <Error show={this.state.showNameErr}
                                               class={"textInputErr"}
                                               msg="Only letters are allowed"/>

                                    </div>

                                    <div className="col-6">
                                        <input type="text" placeholder="Surname"
                                               id={`#paxSurname${this.props.passenger.id}`}
                                               value={this.state.surname}
                                               onChange={this.editSurname} className="form-control"/>
                                        <Error show={this.state.showSurnameErr}
                                               class={"textInputErr"}
                                               msg="Only letters are allowed"/>

                                    </div>





                                </div>


                                <div className={"row"}>
                                    <div className="col-6">
                                        <DatePicker className="form-control"
                                                    dateFormat="d MMM YYYY"
                                                    minDate={this.state.minBirthDate}
                                                    selected={this.state.birthDate}
                                                    onChange={this.changeBirthDate}
                                        />
                                    </div>

                                </div>


                                <MasterPassport countryList={this.props.countryList}
                                />


                                <CabinTrip tripData={this.props.tripData}
                                           currency={this.props.currency}
                                           changePaxCabinClassHandler={this.props.changePaxCabinClassHandler}
                                           segments={this.props.segments} pax={this.props.passenger}/>

                                {(this.state.ageGroup !== 'INF') &&
                                <MilesCards carrierList={this.props.carrierList}/>
                                }


                                <div>
                                    <br/>
                                    <div className="alert alert-info" role="alert">Pick extra upsales your trip!</div>
                                    <Insurance
                                        paxId={this.props.passenger.id}
                                        currency={this.props.currency}
                                        insurances={this.props.insurances}
                                        selectInsuranceHandler={this.props.selectInsuranceHandler}/>

                                    {(this.state.ageGroup !== 'INF') &&


                                    <BagComponent paxId={this.props.passenger.id}
                                                  paxData={this.props.passenger}/>
                                    }

                                   {(this.state.ageGroup !== 'INF') &&

                                    <MealsComponent key={this.props.passenger.id}
                                                    paxData={this.props.passenger}
                                                    paxId={this.props.passenger.id}/>

                                    }


                                </div>

                            </div>


                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-4 offset-4">
                                        <button className="btn btn-primary btn btn-danger" onClick={this.removeMe}>
                                            Remove this Passenger
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>);
    }
}

export default MasterPassenger;


