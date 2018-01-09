import React, {Component} from 'react';

import BusItinerary from './Itinerary/BusItinerary';
import BusPassengerList from './Passengers/BusPassengerList';
import BusSideBar from './BusSideBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FontAwesome from 'react-fontawesome';
import {addBusPassengerAction,firstLoadBusAction} from '../../actions/bus/actionsBus';



class BusApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentWillMount()
    {
        this.props.firstLoad();
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-8">

                    <BusItinerary segments={this.props.itinerary}/>
                    <BusPassengerList
                        addPaxHandler={this.props.addPaxHandler}
                        passengers={this.props.passengers}/>

                </div>

                <div className="col-md-3">

                    <BusSideBar currency={this.props.currency}
                                pricing={this.props.pricing} />
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
        pricing:  {
            total: state.pricingBusReducer,
            analysis: state.pricingBusAnalysisReducer
        },
        itinerary: state.itineraryBusReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPaxHandler: addBusPassengerAction,
        firstLoad: firstLoadBusAction
    }, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps )(BusApp);


