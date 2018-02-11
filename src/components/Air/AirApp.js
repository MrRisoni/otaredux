import React, {Component} from 'react';

import AirPassengerList from './Passengers/AirPassengerList';
import AirSideBar from './AirSideBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FontAwesome from 'react-fontawesome';
import {addAirPassengerAction,firstLoadAirAction,editAirPassengerNameAction,editAirContactAction,
    changeAirPassengerAction,removeAirPassengerAction} from '../../actions/air/airActions';
import AirContact from './Passengers/AirContact';
import AirPayment from './AirPayment';
import {contactAirReducer} from "../../reducers/air/passengers";



class AirApp extends Component {
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

                        <AirPassengerList
                            addPaxHandler={this.props.addPaxHandler}
                            removePaxHandler={this.props.removePaxHandler}
                            editPaxHandler={this.props.editPaxHandler}
                            editNameHandler={this.props.editPaxNameHandler}
                            passengers={this.props.passengers}/>
                    </div>

                    <div className='col-md-3'>
                        <AirSideBar currency={this.props.currency}
                                    pricing={this.props.pricing}/>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-md-8'>
                        <AirContact contact={this.props.contact}
                                    editContactHandler={this.props.editContactHandler}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-8'>
                        <AirPayment/>
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
        passengers: state.passengersAirReducer,
        currency: state.currentCurrencyReducer,
        pricing:  {
            total: state.pricingAirReducer,
            analysis: state.pricingAirAnalysisReducer
        },
        itinerary: state.itineraryAirReducer,
        contact: state.contactAirReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPaxHandler: addAirPassengerAction,
        removePaxHandler:removeAirPassengerAction,
        editPaxHandler:changeAirPassengerAction,
        firstLoad: firstLoadAirAction,
        editPaxNameHandler: editAirPassengerNameAction,
        editContactHandler: editAirContactAction
    }, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps )(AirApp);


