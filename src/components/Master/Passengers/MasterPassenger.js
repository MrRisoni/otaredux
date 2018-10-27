import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import Error from '../../Common/Error';

import ValidatePassengers from '../../../ValidatePassengers';
import MasterPassport from "./MasterPassport";
import Insurance from './InsuranceAir/Insurance';
import BagComponent from './BagsAir/BagComponent';
import MealsComponent from './MealsAir/MealsComponent';
import MilesCards from './MilesAir/MilesCards';


class MasterPassenger extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            ageGroup:'ADT',
            surname: '',
            name: '',
            gender: '',
            birthDate: moment(),
            minBirthDate:moment().subtract(150, 'years'),
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


    handleGenderChange(ev)
    {
        const fieldInput = ev.target.value;

        this.setState({
            gender: fieldInput
        });

        this.props.editNameHandler(this.props.passenger.id,this.state.surname,this.state.name,fieldInput);


    }

    handleAgeGroupChange(ev)
    {
        console.log(this.props.passenger);
        this.props.editPaxHandler(this.props.passenger.id, ev.target.value, this.props.passenger.type);

        let minDate = '';
        switch (ev.target.value)
        {
            case 'ADT':
            case 'STD':
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
            ageGroup:ev.target.value
        });

    }

    removeMe()
    {
        console.log(this.props.passenger);
        this.props.removePaxHandler(this.props.passenger.id,this.props.passenger.type);
    }



    editSurname(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        const VP = new ValidatePassengers();

        this.setState({
            showSurnameErr: !VP.validateNameSurname(fieldInput),
            surname: fieldInput
        });


        this.props.editNameHandler(this.props.passenger.id,fieldInput,this.state.name, this.state.gender);

    }


    editName(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        const VP = new ValidatePassengers();

        this.setState({
            showNameErr: !VP.validateNameSurname(fieldInput),
            name: fieldInput
        });

        this.props.editNameHandler(this.props.passenger.id,this.state.surname,fieldInput,this.state.gender);

    }

    render() {
        return (
            <div className="row passengerCompo show passengerListCollapse">
                <div className="col-sm-12">


                    <div className="card bg-light">
                        <div className="card-header">

                            <div className="row">

                                <div className="col-sm-3">
                                    Passenger # {this.props.passenger.humanId}
                                </div>

                                <div className="col-sm-4">
                                    <select className="form-control" onChange={this.handleAgeGroupChange}>
                                        <option key="" value="">Select Type</option>
                                        <option key="ADT" value="ADT" selected={'ADT' == this.props.passenger.type}>Adult</option>
                                        <option key="CNN" value="CNN">Child</option>
                                        <option key="INF" value="INF">Infant</option>
                                        {this.props.product === 'ship' &&
                                             <option key="STD" value="STD">Student</option>
                                        }
                                    </select>
                                </div>

                                <div className="col-sm-2 offset-sm-2">
                                    <button className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target={`#passengerCollapse${this.props.passenger.id}`} aria-expanded="false"
                                            aria-controls="collapseExample">
                                        Toggle
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="card-body collapse show" id={`passengerCollapse${this.props.passenger.id}`}>
                            {this.props.passenger.gender} {this.props.passenger.name} {this.props.passenger.surname}


                            <div className="row">


                                <div className="col-sm-3">
                                    <select className="form-control" onChange={this.handleGenderChange}>
                                        <option key="" value="">Select Gender</option>
                                        <option key="M" value="M">Male</option>
                                        <option key="F" value="F">Female</option>
                                    </select>
                                </div>


                                <div className="col-sm-5">
                                    <input type="text" placeholder="Surname"
                                           id={`#paxSurname${this.props.passenger.id}`}
                                           value={this.state.surname}
                                           onChange={this.editSurname} className="form-control"/>
                                    <Error show={this.state.showSurnameErr}
                                           class={"textInputErr"}
                                           msg="Only letters are allowed"/>

                                </div>


                                <div className="col-sm-3">
                                    <input type="text" placeholder="Name" id={`#paxName${this.props.passenger.id}`}
                                           value={this.state.name}
                                           onChange={this.editName} className="form-control"/>
                                    <Error show={this.state.showNameErr}
                                           class={"textInputErr"}
                                           msg="Only letters are allowed"/>

                                </div>


                            </div>



                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="birthday">Birth Date</label>
                                    <DatePicker className="form-control"
                                                dateFormat="d MMM YYYY"
                                                minDate={this.state.minBirthDate}
                                                selected={this.state.birthDate}
                                                onChange={this.changeBirthDate}
                                    />
                                </div>
                            </div>


                            {this.props.product === 'air' &&
                                <MasterPassport />
                            }

                            {(this.state.ageGroup === 'ADT' || this.state.ageGroup === 'CNN' && this.props.product === 'air') &&
                                <MilesCards  carrierList={this.props.carrierList}/>
                            }

                            {this.props.product === 'air' &&

                                <div>
                                    <br/>
                                    <div className="alert alert-info" role="alert">Pick extra upsales your trip!</div>
                                    <Insurance
                                        paxId={this.props.passenger.id}
                                        currency={this.props.currency}
                                        insurances={this.props.insurances}
                                        selectInsuranceHandler={this.props.selectInsuranceHandler}/>

                                    {(this.state.ageGroup === 'ADT' || this.state.ageGroup === 'CNN') &&


                                        <BagComponent paxId={this.props.passenger.id}
                                                  currency={this.props.currency}
                                                  purchasedBags={this.props.purchasedBags}
                                                  bagsAir={this.props.bagsAir}
                                                  blueRibbon={this.props.blueRibbon}
                                                  addBagHandler={this.props.addBagHandler}
                                                  removeBagHandler={this.props.removeBagHandler}/>
                                    }

                                    {(this.state.ageGroup === 'ADT' || this.state.ageGroup === 'CNN') &&

                                        <MealsComponent paxId={this.props.passenger.id}
                                                    currency={this.props.currency}
                                                    boughtMeals={this.props.boughtMeals}
                                                    mealOptions={this.props.mealOptions}
                                                    addMealHandler={this.props.addMealHandler}
                                                    segments={this.props.segments}/>

                                    }


                                </div>
                            }
                        </div>


                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <button className="btn btn-primary btn-sm btn-danger" onClick={this.removeMe}>
                                        Remove this Passenger
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>);
    }
}

export default MasterPassenger;


