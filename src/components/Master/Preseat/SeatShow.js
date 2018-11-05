import React, {Component} from 'react';

class SeatShow extends Component {

    render() {
        return (
            <div className="card bg-info preSeatPaxSelector seatShow">
                <div className="card-header"><b >Your seats!</b></div>
                <div className="card-body text-white">

                    {this.props.passengers.map( (pax,idx) => {
                        if(pax.active && pax.type !== 'INF') {
                            return (

                                <div className="row">

                                    <div className="col-md-10">
                                        <div className="alert alert-warning seatPaxSelector" role="alert">
                                            Choose for Passenger# {pax.humanId}
                                            {pax.surname} {pax.name}
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        {(pax.seat.number === 0) &&
                                            <div className="alert alert-danger" role="alert">
                                                Nothing selected
                                            </div>
                                        }

                                        {(pax.seat.number !== 0) &&
                                        <div className="alert alert-primary" role="alert">
                                            {pax.seat.letter}{pax.seat.number}
                                        </div>
                                        }

                                    </div>

                                </div>)
                        }
                    })}
                </div>
            </div>

        );
    }
}

export default SeatShow;


