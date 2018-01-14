import React, {Component} from 'react';
import Error from '../../Common/Error';

import ValidatePassengers from '../../../ValidatePassengers';


class BusPassenger extends Component {
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
    }
    handleChange()
    {
    }


    editSurname(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        const VP = new ValidatePassengers();

        this.setState({
            showSurnameErr: !VP.validateNameSurname(fieldInput),
            surname: fieldInput
        });

    }


    editName(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        const VP = new ValidatePassengers();

        this.setState({
            showNameErr: !VP.validateNameSurname(fieldInput),
            name: fieldInput
        });
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
                                        <option key="ADT" value="ADT">Adult</option>
                                        <option key="CNN" value="CNN">Child</option>
                                        <option key="STD" value="INF">Student</option>
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

                    </div>

                </div>
            </div>);
    }
}

export default BusPassenger;


