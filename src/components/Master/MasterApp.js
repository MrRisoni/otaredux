import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './SideBar/MasterSideBar';
import ItineraryData from './Segments/ItineraryData';


import * as actsInsurance from '../../actions/master/actionsInsurance';
import * as actsMaster from '../../actions/master/actionsMaster';
import * as actsPaxes from '../../actions/master/actionsPassengers';
import * as actsUpsales from '../../actions/master/actionsUpsales';
import * as actsPreseat from '../../actions/master/actionsPreseat';


import MasterContact from './Passengers/MasterContact';
import CreditCard from './Payment/CreditCard';
import ReceiptOrInvoice from './Payment/ReceiptOrInvoice';
import Preseat from './Preseat/Preseat';
import FlexibleTicket from './Passengers/FlexibleTicket';
import BlueRibbon from './Passengers/BlueRibbon';


class MasterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    this.props.fetchCountriesAction();

    this.props.firstLoad();
  }

  render() {
    return (
      <div className="busApp">
        <div className="row">

          <div className="col-8">

            <ItineraryData
              product={this.props.product}
              tripData={this.props.tripData}
            />

            <MasterPassengerList
              tripData={this.props.tripData}
              product={this.props.product}
              addPaxHandler={this.props.addPaxHandler}
              removePaxHandler={this.props.removePaxHandler}
              editPaxHandler={this.props.editPaxHandler}
              changePaxCabinClassHandler={this.props.changePaxCabinClassHandler}
              editNameHandler={this.props.editPaxNameHandler}
              addMealHandler={this.props.addMealHandler}
              removeMealHandler={this.props.removeMealHandler}
              selectInsuranceHandler={this.props.selectInsuranceHandler}
              changeBlueRibbonHandler={this.props.changeBlueRibbonHandler}
              selectSeatHandler={this.props.selectSeatHandler}
              changePreSeatSelectPassengerHandler={this.props.changePreSeatSelectPassengerHandler}
              passengers={this.props.passengers}
              currency={this.props.currency}
              insurances={this.props.insuranceAir}
              carrierList={this.props.carrierList}
              cabinSelection={this.props.cabinSelection}
              segments={this.props.segments}
              hasBlueRibbon={this.props.hasBlueRibbon}
              blueRibbonPrices={this.props.blueRibbonPrices}
              countryList={this.props.asyncData.countries}
            />


          </div>

          <div className="col-4">
            <MasterSideBar/>
          </div>
        </div>


          {/* <Preseat
          preSeatSelectedItems={this.props.preSeatSelectedItems}
          passengers={this.props.passengers}
          segments={this.props.segments}
          currency={this.props.currency}
          cabinSelection={this.props.cabinSelection}
          seatMapInfo={this.props.seatMapInfo}
          pickSeatHandler={this.props.pickSeatHandler}
          resetSeatsHandler={this.props.resetSeatsHandler}
          selectedSeats={this.props.selectedSeats}
        /> */}


        <FlexibleTicket/>



        <BlueRibbon/>



        <MasterContact
          contact={this.props.contact}
          countryList={this.props.asyncData.countries}
          editContactHandler={this.props.editContactHandler}
        />


        <ReceiptOrInvoice countryList={this.props.asyncData.countries} />
        <CreditCard />


      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    passengers: state.passengersMasterReducer,
    carrierList: state.uniqueCarriersReducer,
    currency: state.currentCurrencyReducer,
    currencyList: state.getCurrenciesReducer,
    pricing: {
      total: state.pricingMasterReducer,
      upsales: state.pricingUpsalesMasterReducer,
    },
    contact: state.contactMasterReducer,
    insuranceAir: state.airInsuranceReducer,
    boughtInsurances: state.purchasedInsuranceReducer,
    insuranceOptions: state.airInsuranceReducer,
    segments: state.getLegsReducer,
    tripData: state.airTripReducer,
    hasFlexibleTicket: state.hasFlexibleTicketReducer,
    flexibleTicket: state.flexibleTicketReducer,
    hasBlueRibbon: state.hasBlueRibbonReducer,
    blueRibbonPrices: state.getBlueRibbonReducer,
    ticketPrices: state.ticketPricesReducer,
    cabinSelection: state.fetchCabinPaxPerSegmentReducer,
    asyncData: state.countryListReducer,
    preSeatSelectedItems: state.fetchPreseatSelectedPaxReducer,
    seatMapInfo: state.seatMapInfoReducer,
    langs: state.getLanguagesReducer,
    selectedSeats: state.fetchSeatSelectionReducer,
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
    selectInsuranceHandler: actsInsurance.changeAirInsuranceAction,
    changeFlexibleTicketHandler: actsUpsales.changeFlexibleTicketAction,
    selectSeatHandler: null,
    changePreSeatSelectPassengerHandler: actsPreseat.changePreSeatSelectPassengerAction,
    changeLanguageHandler: actsMaster.changeLanguageAction,
    fetchCountriesAction: actsMaster.fetchCountriesAction,
    pickSeatHandler: actsPreseat.pickSeatAction,
    resetSeatsHandler: actsPreseat.resetSeatsAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MasterApp);
