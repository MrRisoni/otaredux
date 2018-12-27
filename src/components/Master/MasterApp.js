import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './SideBar/MasterSideBar';
import ItineraryData from './Segments/ItineraryData';


import * as actsBags from '../../actions/master/actionsBags';
import * as actsInsurance from '../../actions/master/actionsInsurance';
import * as actsMaster from '../../actions/master/actionsMaster';
import * as actsMeals from '../../actions/master/actionsMeals';
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
              addBagHandler={this.props.addBagHandler}
              removeBagHandler={this.props.removeBagHandler}
              addMealHandler={this.props.addMealHandler}
              removeMealHandler={this.props.removeMealHandler}
              selectInsuranceHandler={this.props.selectInsuranceHandler}
              changeFlexibleTicketHandler={this.props.changeFlexibleTicketHandler}
              changeBlueRibbonHandler={this.props.changeBlueRibbonHandler}
              selectSeatHandler={this.props.selectSeatHandler}
              changePreSeatSelectPassengerHandler={this.props.changePreSeatSelectPassengerHandler}
              passengers={this.props.passengers}
              currency={this.props.currency}
              insurances={this.props.insuranceAir}
              carrierList={this.props.carrierList}
              bagsAir={this.props.bagsAir}
              cabinSelection={this.props.cabinSelection}
              getBagsLimit={this.props.getBagsLimit}
              purchasedBags={this.props.purchasedBags}
              mealOptions={this.props.mealOptions}
              boughtMeals={this.props.boughtMeals}
              segments={this.props.segments}
              hasFlexibleTicket={this.props.hasFlexibleTicket}
              flexibleTicket={this.props.flexibleTicket}
              hasBlueRibbon={this.props.hasBlueRibbon}
              blueRibbonPrices={this.props.blueRibbonPrices}
              countryList={this.props.asyncData.countries}
            />


          </div>

          <div className="col-4">
            <MasterSideBar
              currency={this.props.currency}
              currencyList={this.props.currencyList}
              ticketPrices={this.props.ticketPrices}
              changeLanguageHandler={this.props.changeLanguageHandler}
              bagAllowance={this.props.bagsAir}
              passengers={this.props.passengers}
              purchasedBags={this.props.purchasedBags}
              langs={this.props.langs}
              boughtInsurances={this.props.boughtInsurances}
              insuranceOptions={this.props.insuranceOptions}
              mealOptions={this.props.mealOptions}
              boughtMeals={this.props.boughtMeals}
              pricing={this.props.pricing}
              hasFlexibleTicket={this.props.hasFlexibleTicket}
              flexibleTicket={this.props.flexibleTicket}
              hasBlueRibbon={this.props.hasBlueRibbon}
              blueRibbonPrices={this.props.blueRibbonPrices}
            />
          </div>
        </div>


        <Preseat
          preSeatSelectedItems={this.props.preSeatSelectedItems}
          passengers={this.props.passengers}
          segments={this.props.segments}
          currency={this.props.currency}
          cabinSelection={this.props.cabinSelection}
          seatMapInfo={this.props.seatMapInfo}
          pickSeatHandler={this.props.pickSeatHandler}
          selectedSeats={this.props.selectedSeats}
        />


        <FlexibleTicket
          passengers={this.props.passengers}
          changeFlexibleTicketHandler={this.props.changeFlexibleTicketHandler}
          currency={this.props.currency}
          hasFlexibleTicket={this.props.hasFlexibleTicket}
          flexibleTicket={this.props.flexibleTicket}
        />


        <BlueRibbon
          passengers={this.props.passengers}
          changeBlueRibbonHandler={this.props.changeBlueRibbonHandler}
          currency={this.props.currency}
          hasBlueRibbon={this.props.hasBlueRibbon}
          blueRibbonPrices={this.props.blueRibbonPrices}
        />



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
    bagsAir: state.getBagsReducer,
    purchasedBags: state.purchasedBagsReducer,
    boughtInsurances: state.purchasedInsuranceReducer,
    insuranceOptions: state.airInsuranceReducer,
    mealOptions: state.getMealsReducer,
    boughtMeals: state.purchasedMealsReducer,
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
    getBagsLimit: state.getLimitBagReducer,
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
    addBagHandler: actsBags.addAirBagAction,
    removeBagHandler: actsBags.removeAirBagAction,
    selectInsuranceHandler: actsInsurance.changeAirInsuranceAction,
    addMealHandler: actsMeals.addMealAction,
    removeMealHandler: actsMeals.removeMealAction,
    changeFlexibleTicketHandler: actsUpsales.changeFlexibleTicketAction,
    changeBlueRibbonHandler: actsUpsales.changeBlueRibbonAction,
    selectSeatHandler: null,
    changePreSeatSelectPassengerHandler: actsPreseat.changePreSeatSelectPassengerAction,
    changeLanguageHandler: actsMaster.changeLanguageAction,
    fetchCountriesAction: actsMaster.fetchCountriesAction,
    pickSeatHandler: actsPreseat.pickSeatAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MasterApp);
