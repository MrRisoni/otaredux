import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItineraryData from './Segments/ItineraryData';
import MasterSideBar from './SideBar/MasterSideBar';
import BrandedFares from './Branded/BrandedFares';
import Preseat from './Preseat/Preseat';
import WebCheckin from './Passengers/WebCheckin';
import FastTrack from './FastTrack';
import FlexibleTicket from './Passengers/FlexibleTicket';
import AirHelp from './AirHelp';
import BlueRibbon from './Passengers/BlueRibbon';
import Parking from './Parking/Parking';
import LoungeAccess from './LoungeAccess/LoungeAccess';
import * as actsMaster from '../../actions/master/actionsMaster';
import PassengerTable from './Passengers/PassengerTable';


class UpsalesPage extends Component {
  render() {
    return (
        <div className="busApp">
            <div className="row">

                <div className="col-8">

                    <ItineraryData
                        tripData={this.props.tripData}
                    />

                    <PassengerTable
                        passengers={this.props.passengers}
                    />


                </div>

                <div className="col-4">
                    <MasterSideBar/>
                </div>
            </div>


            <BrandedFares/>
            <Preseat/>
            <WebCheckin/>
            <FastTrack/>
            <FlexibleTicket/>
            <AirHelp/>
            <BlueRibbon/>
            <Parking/>
            <LoungeAccess/>


        </div>
    );
  }
}


function mapStateToProps(state) {
  return {
      passengers: state.passengersMasterReducer,
      contact: state.contactMasterReducer,
      tripData: state.airTripReducer,
      asyncData: state.countryListReducer,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      fetchCountriesAction: actsMaster.fetchCountriesAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UpsalesPage);
