import React, {Component} from 'react';
import Error from '../../Common/Error';

import ValidatePassengers from '../../../ValidatePassengers';


class AirPassenger extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            surname: '',
            name: '',
            showSurnameErr: false,
            showNameErr: false
        };

        this.editSurname = this.editSurname.bind(this);
        this.editName = this.editName.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeMe = this.removeMe.bind(this);

    }
    handleChange(ev)
    {
        console.log(this.props.passenger);
        this.props.editPaxHandler(this.props.passenger.id, ev.target.value, this.props.passenger.type);
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


        this.props.editNameHandler(this.props.passenger.id,fieldInput,this.state.name);

    }


    editName(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        const VP = new ValidatePassengers();

        this.setState({
            showNameErr: !VP.validateNameSurname(fieldInput),
            name: fieldInput
        });

        this.props.editNameHandler(this.props.passenger.id,this.state.surname,fieldInput);

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
                                    <select className="form-control" onChange={this.handleChange}>
                                        <option key="" value="">Select Type</option>
                                        <option key="ADT" value="ADT" selected={'ADT' == this.props.passenger.type}>Adult</option>
                                        <option key="CNN" value="CNN">Child</option>
                                        <option key="STD" value="STD">Student</option>
                                    </select>
                                </div>

                                <div className="col-sm-2 offset-sm-3">
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
                            {this.props.passenger.name} {this.props.passenger.surname}


                            <div className="row">


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

export default AirPassenger;


