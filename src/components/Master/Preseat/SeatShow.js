import React, {Component} from 'react';

class SeatShow extends Component {

    render() {
        return (
            <div className="card bg-info seatShow">
                <div className="card-header"><b>Your seats!</b></div>
                <div className="card-body text-white">
                    {this.props.passengers.map( (pax,idx) => {
                        if(pax.active) {
                            return (<div>{pax.surname} {pax.name} {pax.seat.letter}{pax.seat.number}</div>)
                        }
                    })}
                </div>
            </div>

        );
    }
}

export default SeatShow;


