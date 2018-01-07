import React, {Component} from 'react';

class BusPassenger extends Component {
    render() {
        return (
            <div> Component BusPassenger

                {this.props.passenger.name} {this.props.passenger.surname}
                </div>

        );
    }
}

export default BusPassenger;


