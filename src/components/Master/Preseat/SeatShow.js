import React, {Component} from 'react';
import SeatPaxSelector from './SeatPaxSelector';

class SeatShow extends Component {
    constructor(props)
    {
        super(props);

    }


    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error);
        console.log(info);

    }

    render() {

        let seatSelectorsDiv = [];


        this.props.passengers.forEach( (pax,idx) => {

            if (pax.active === true) {
                seatSelectorsDiv.push(<SeatPaxSelector key={idx} pax={pax}
                                         preseatSelectedPax={this.props.preseatSelectedPax}
                                         changePreSeatSelectPassengerHandler={this.props.changePreSeatSelectPassengerHandler}
                />);
            }
        });


        return (
            <div className="card bg-info preSeatPaxSelector seatShow">
                <div className="card-header"><b >Your seats!</b></div>
                <div className="card-body text-white">
                    {seatSelectorsDiv}
                </div>
            </div>

        );
    }
}

export default SeatShow;


