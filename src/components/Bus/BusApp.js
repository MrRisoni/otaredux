import React, {Component} from 'react';

import BusItinerary from './BusItinerary';
import BusPassengerList from './BusPassengerList';
import BusSideBar from './BusSideBar';

import FontAwesome from 'react-fontawesome';


class BusApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div> Component Bus

            <BusItinerary/>
            <BusPassengerList/>
            <BusSideBar/>
            </div>

        );
    }
}

export default BusApp;


