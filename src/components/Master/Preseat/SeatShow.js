import React, {Component} from 'react';
import SeatPaxSelector from './SeatPaxSelector';

class SeatShow extends Component {
    constructor(props)
    {
        super(props);

    }


    render() {

        return (
            <div className="card bg-info preSeatPaxSelector seatShow">
                <div className="card-header"><b >Your seats!</b></div>
                <div className="card-body text-white">

                    {this.props.passengers.map( (pax,idx) => {
                        return (<SeatPaxSelector key={idx} pax={pax}
                                                 preseatSelectedPax={this.props.preseatSelectedPax}
                                 changePreSeatSelectPassengerHandler={this.props.changePreSeatSelectPassengerHandler}
                        />);
                    })}
                </div>
            </div>

        );
    }
}

export default SeatShow;


