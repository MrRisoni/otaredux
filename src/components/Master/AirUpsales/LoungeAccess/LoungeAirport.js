import React, {Component} from 'react';

class LoungeAirport extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        console.log('---------------');
        console.log(this.props.prices);
        return (
            <div> {this.props.prices.airport} </div>

        );
    }
}

export default LoungeAirport;


