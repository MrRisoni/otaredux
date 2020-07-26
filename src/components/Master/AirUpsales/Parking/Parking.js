import React, {Component} from 'react';
import {DataContext} from "../../../OtaContext";
import ButtonToggle from "../../../Common/ButtonToggle";


class Parking extends Component {
    static contextType = DataContext;

    constructor(props) {
        super(props);
        this.handleAddDays = this.handleAddDays.bind(this);
        this.handleSubtractDays = this.handleSubtractDays.bind(this);
    }

    handleAddDays()
    {
        console.log('add park days');
        this.props.addParkingDayHandler();
    }

    handleSubtractDays()
    {
        console.log('remove park days');
        this.props.subParkingDayHandler();
    }


    render() {
        const originAirport = this.context.ItineraryRsc[0].from.iata;
        console.log('origin airport ' + originAirport);
        console.log(originAirport);

        return (
            <section>
                <div className="row contactDetails">
                    <div className="col-8">

                        <div className="card">
                            <div className="card-header bg-light">

                                <div className="row">

                                    <div className="col-3">

                                        Parking up to 22 days
                                    </div>

                                    <div className="col-2 offset-6">
                                        <button
                                            className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target="#flexibleTicketCollapse"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >

                                            general.Toggle
                                        </button>
                                    </div>

                                </div>
                            </div>


                            <div className="card-body collapse" id="flexibleTicketCollapse">
                                <div className="row">
                                    <div className="col-12">
                                        <table className="table table-bordered table-stripped">
                                            <thead>
                                                <tr>
                                                    <th>Up to days</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.context.ParkingRsc[originAirport].map( prcd => {
                                                return (<tr>
                                                        <td>Up to days {prcd.upToDays}</td>
                                                        <td> {prcd.price} E</td></tr>)
                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">park days {this.props.parkDays}</div>
                                    <div className="col-4">
                                        <button className="btn-primary btn btn-sm" onClick={this.handleAddDays}>Add
                                            Day
                                        </button>
                                        <button className="btn-danger btn btn-sm"
                                                onClick={this.handleSubtractDays}>Remove Day
                                        </button>

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


export default Parking;
