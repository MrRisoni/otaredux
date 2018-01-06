import React, {Component} from 'react';

import BusItinerary from './BusItinerary';
import BusPassengerList from './BusPassengerList';
import BusSideBar from './BusSideBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FontAwesome from 'react-fontawesome';
import {addPassengerAction, changeCurrencyAction, firstLoadAction} from "../../actions/air/airActions";
import {passengersBusReducer} from "../../reducers/bus/passengersBus";


class BusApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-8">

                    <BusItinerary/>
                    <BusPassengerList passengers={this.props.passengers}/>

                </div>

                <div className="col-md-3">

                    <BusSideBar/>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log('App Component: map state to props');
    console.log(state);

    return {
        passengers: state.passengersBusReducer,
        currency: state.currentCurrencyReducer,
        pricing: state.pricingBusReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}


export default connect(mapStateToProps, )(BusApp);


