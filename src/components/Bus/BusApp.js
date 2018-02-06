import React, {Component} from 'react';

import BusItinerary from './Itinerary/BusItinerary';
import BusPassengerList from './Passengers/BusPassengerList';
import BusSideBar from './BusSideBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FontAwesome from 'react-fontawesome';
import {addBusPassengerAction,firstLoadBusAction,editBusPassengerNameAction,
    changeBusPassengerAction,removeBusPassengerAction} from '../../actions/bus/actionsBus';
import BusContact from './Passengers/BusContact';
import BusPayment from './BusPayment';
import {contactBusReducer} from "../../reducers/bus/passengersBus";



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
            <div className='busApp'>
                <div className='row'>

                    <div className='col-md-8'>

                        <BusItinerary segments={this.props.itinerary}/>
                        <BusPassengerList
                            addPaxHandler={this.props.addPaxHandler}
                            removePaxHandler={this.props.removePaxHandler}
                            editPaxHandler={this.props.editPaxHandler}
                            editNameHandler={this.props.editPaxNameHandler}
                            passengers={this.props.passengers}/>
                    </div>

                    <div className='col-md-3'>
                        <BusSideBar currency={this.props.currency}
                                    pricing={this.props.pricing}/>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-md-8'>
                        <BusContact contact={this.props.contact}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-8'>
                        <BusPayment/>
                    </div>
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
        itinerary: state.itineraryBusReducer,
        contact: state.contactBusReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPaxHandler: addBusPassengerAction,
        removePaxHandler:removeBusPassengerAction,
        editPaxHandler:changeBusPassengerAction,
        firstLoad: firstLoadBusAction,
        editPaxNameHandler: editBusPassengerNameAction
    }, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps )(BusApp);


