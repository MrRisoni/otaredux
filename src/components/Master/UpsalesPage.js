import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItineraryData from './Segments/ItineraryData';
import MasterPassengerList from "./Passengers/MasterPassengerList";
import MasterSideBar from "./SideBar/MasterSideBar";
import BrandedFares from "./Branded/BrandedFares";
import Preseat from "./Preseat/Preseat";
import WebCheckin from "./Passengers/WebCheckin";
import FastTrack from "./FastTrack";
import FlexibleTicket from "./Passengers/FlexibleTicket";
import AirHelp from "./AirHelp";
import BlueRibbon from "./Passengers/BlueRibbon";
import Parking from "./Parking/Parking";
import LoungeAccess from "./LoungeAccess/LoungeAccess";
import MasterContact from "./Passengers/MasterContact";
import ReceiptOrInvoice from "./Payment/ReceiptOrInvoice";
import CreditCard from "./Payment/CreditCard";
import * as actsPaxes from "../../actions/master/actionsPassengers";
import * as actsMaster from "../../actions/master/actionsMaster";


class UpsalesPage extends Component {
  render() {
    return (
        <div className="busApp">
            <div className="row">

                <div className="col-8">

                    <ItineraryData
                        tripData={this.props.tripData}
                    />

                    <MasterPassengerList
                        tripData={this.props.tripData}
                        addPaxHandler={this.props.addPaxHandler}
                        removePaxHandler={this.props.removePaxHandler}
                        editPaxHandler={this.props.editPaxHandler}
                        changePaxCabinClassHandler={this.props.changePaxCabinClassHandler}
                        editNameHandler={this.props.editPaxNameHandler}
                        passengers={this.props.passengers}
                        countryList={this.props.asyncData.countries}
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
      addPaxHandler: actsPaxes.addMasterPassengerAction,
      removePaxHandler: actsPaxes.removeMasterPassengerAction,
      editPaxHandler: actsPaxes.changeMasterPassengerAction,
      changePaxCabinClassHandler: actsPaxes.changeAirCabinClassPassengerAction,
      firstLoad: actsMaster.firstLoadMasterAction,
      editPaxNameHandler: actsPaxes.editMasterPassengerNameAction,
      editContactHandler: actsPaxes.editMasterContactAction,
      fetchCountriesAction: actsMaster.fetchCountriesAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UpsalesPage);
