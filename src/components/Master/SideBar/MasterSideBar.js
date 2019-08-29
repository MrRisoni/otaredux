import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideBarUpsale from './SideBarUpsale';
import SideBarPersonUpsale from './SideBarPersonUpsale';
import * as actsMaster from '../../../actions/master/actionsMaster';
import { Translate } from 'react-redux-i18n';

import { preSeatPrice } from '../../../helpers';
import {hasWebCheckinReducer, webCheckinPriceReducer} from "../../../reducers/air/webCheckin";

class MasterSideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const paxPrices = [];
    let activePaxCount = 0;

    const bagPrices = [];
    const insurancePrices = [];
    const mealsPrices = [];

    let totalBagCount = 0;
    let insuranceCount = 0;
    let mealsCount = 0;
    const otherUpsalesCount = 0;
    let totalPreseatPrice =0;


    this.props.passengers.forEach(pax => {
      if (pax.active) {

          const cabins = this.props.cabinSelection.filter(cab => cab.paxId == pax.id);

          totalPreseatPrice += preSeatPrice(this.props.selectedSeats, pax, cabins, this.props.seatMapInfo);



        activePaxCount++;
        this.props.bagAllowance.forEach(bag => {
          let bagCountId = 0;
          this.props.purchasedBags.forEach(boughtBag => {
            if (bag.id === boughtBag.bagId) {
              if (boughtBag.paxId === pax.id) {
                bagCountId++;
              }
            }
          });
          if (bagCountId > 0) {
            totalBagCount++;
            const bagDescr = (
              <div>
                {bagCountId}
                {' '}
x
                {' '}
                {bag.weight}
                {' '}
                {(bag.price * this.props.currency.rate).toFixed(2)}
                {' '}
              </div>);

            bagPrices.push(<SideBarPersonUpsale
              pax={pax}
              description={bagDescr}
            />);
          }
        });


        this.props.boughtInsurances.forEach(boughtIns => {
          this.props.insuranceOptions.forEach(insOption => {
            if ((pax.id === boughtIns.paxId) && (insOption.id === boughtIns.insuranceId) && (insOption.id > 0)) {
              insuranceCount++;

              const insuranceDescr = (
                <div>
                  {' '}
                  {insOption.title}
                  {' '}
                  {insOption.price.toFixed(2)}

                </div>);

              insurancePrices.push(<SideBarPersonUpsale
                pax={pax}
                description={insuranceDescr}
              />);
            }
          });
        });

        this.props.boughtMeals.forEach(boughtMl => {
          this.props.mealOptions.forEach(availbMeal => {
            if ((pax.id == boughtMl.paxId) && (availbMeal.id == boughtMl.mealId)) {
              mealsCount++;

              mealsPrices.push(
                <div key={pax.id}>
                  <div className="row">
                    <div className="col-12">
                      {pax.surname}
                      {' '}
                      {pax.name}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {availbMeal.title}
                      {' '}
                      {(availbMeal.price * this.props.currency.rate).toFixed(2)}

                    </div>
                  </div>
                </div>,
              );
            }
          });
        });
      }
    });

    let bagsDiv = (<div />);

    if (totalBagCount > 0) {
      bagsDiv = (
        <SideBarUpsale
          title="Bags"
          price={bagPrices}
          currency={this.props.currency}
        />
      );
    }


    let insuranceDiv = (<div />);

    if (insuranceCount > 0) {
      insuranceDiv = (
        <SideBarUpsale
          title="Insurance"
          price={insurancePrices}
          currency={this.props.currency}
        />
      );
    }


    let mealsDiv = (<div />);


    if (mealsCount > 0) {
      mealsDiv = (
        <SideBarUpsale
          title="Meals"
          price={mealsPrices}
          currency={this.props.currency}
        />
      );
    }


    const otherUpsalesDiv = [];


      if (this.props.parkingPrice >0 ) {

          otherUpsalesDiv.push(<SideBarUpsale
              title="Parking"
              price={this.props.parkingPrice}
              currency={this.props.currency}
          />);
      }


      if (this.props.hasFastTrack === true) {

        otherUpsalesDiv.push(<SideBarUpsale
            title="Fast Track"
            price={this.props.overallFastTrackCost}
            currency={this.props.currency}
        />);
    }


      if (this.props.hasFlexibleTicket.state === true) {
      const flexiblePrice = (activePaxCount * this.props.flexibleTicket.pricePerPax * this.props.currency.rate).toFixed(2);

      otherUpsalesDiv.push(<SideBarUpsale
        title="Flexible Ticket"
        price={flexiblePrice}
        currency={this.props.currency}
      />);
    }

      if (this.props.hasWebCheckin.state === true) {
          const webCheckinPrice = (activePaxCount * this.props.webCheckinPrice.pricePerPax * this.props.currency.rate).toFixed(2);

          otherUpsalesDiv.push(<SideBarUpsale
              title="Web Checkin"
              price={webCheckinPrice}
              currency={this.props.currency}
          />);
      }



    if (this.props.hasBlueRibbon.state === true) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Blue Ribbon"
          price={this.props.overallBlueRibbonCost}
          currency={this.props.currency}
        />,
      );
    }

      totalPreseatPrice *= (this.props.currency.rate).toFixed(2);
    if (totalPreseatPrice >0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Preaseating"
          price={totalPreseatPrice}
          currency={this.props.currency}
        />,
      );
    }


    return (

      <div className="pricebox sticky-top ">

        <div className="card bg-info">
          <div className="card-header">
            <div className="row">

              <div className="col-8">
                <h6>Price Analysis</h6>
              </div>


              <div className="col-3 offset-col-4">
                <button
                  className="btn btn-primary btn-sm"
                  data-toggle="collapse"
                  href="#priceBoxCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="priceBoxCollapse"
                >

                    <Translate value="general.Expand" />
                </button>
              </div>


            </div>
          </div>

          <div className="card-body show text-white" id="priceBoxCollapse">

            <div className="row">
              <div className="col-12">
                <h4>
                    <Translate value="pricebox.TicketPrice" />
                    {' '}
                  {this.props.ticketPrices}
                  {' '}
                  {this.props.currency.code}
                  {' '}
                </h4>
              </div>
            </div>

            {bagsDiv}
            {insuranceDiv}
            {mealsDiv}
            {otherUpsalesDiv}


            <div className="row">
              <div className="col-12">
                <h4>
                    <Translate value="pricebox.UpsalePrices" />
                    {' '}

                    {this.props.pricing.upsales}
                  {' '}
                  {this.props.currency.code}
                  {' '}
                </h4>
              </div>
            </div>


          </div>


          <div className="card-footer">
            <div className="row">
              <div className="col-12">

                <h4>
                  <Translate value="pricebox.Total" /> :
                  {' '}
                  {this.props.pricing.total.toFixed(2)}
                  {' '}
                  {this.props.currency.code}
                  {' '}

                </h4>

              </div>
            </div>


            <div className="row langSelector">
              <div className="col-8 offset-2">
                <select
                  className="form-control"
                  id="exampleFormControlSelect2"
                  onChange={this.props.changeLanguageHandler}
                >
                  <option value="en">

                   <Translate value="pricebox.ChangeLang" />
                  </option>
                  {this.props.langs.map(lang => (<option key={lang.code} value={lang.code}>{lang.title}</option>))}
                </select>
              </div>
            </div>


            <div className="row">
              <div className="col-12">

                <div className="row selectLang">
                  <div className="col-8 offset-2">
                    <select
                      className="form-control"
                      onChange={this.props.changeCurrencyHandler}>
                      <option value="">
                          <Translate value="pricebox.ChangeCur" />

                          </option>
                      {this.props.currencyList.map(cur => (<option value={cur.code}>{cur.code}</option>))}
                    </select>
                  </div>
                </div>

              </div>
            </div>


          </div>

        </div>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    passengers: state.passengersMasterReducer,
    currency: state.currentCurrencyReducer,
    currencyList: state.getCurrenciesReducer,
    pricing: {
      total: state.pricingMasterReducer,
      upsales: state.pricingUpsalesMasterReducer,
    },
    insuranceAir: state.airInsuranceReducer,
    bagAllowance: state.getBagsReducer,
    purchasedBags: state.purchasedBagsReducer,
    boughtInsurances: state.purchasedInsuranceReducer,
    insuranceOptions: state.airInsuranceReducer,
    mealOptions: state.getMealsReducer,
    boughtMeals: state.purchasedMealsReducer,
    hasFlexibleTicket: state.hasFlexibleTicketReducer,
    flexibleTicket: state.flexibleTicketReducer,
    hasWebCheckin: state.hasWebCheckinReducer,
    webCheckinPrice: state.webCheckinPriceReducer,
    hasBlueRibbon: state.hasBlueRibbonReducer,  
    overallBlueRibbonCost: state.getBlueRibbonFinalCostReducer,
    overallFastTrackCost : state.getFastTrackFinalCostReducer,
    ticketPrices: state.ticketPricesReducer,
    cabinSelection: state.fetchCabinPaxPerSegmentReducer,
    preSeatSelectedItems: state.fetchPreseatSelectedPaxReducer,
    seatMapInfo: state.seatMapInfoReducer,
    langs: state.getLanguagesReducer,
    selectedSeats: state.fetchSeatSelectionReducer,
    parkingPrice: state.getParkPricingFinalCostReducer,
    hasFastTrack: state.hasFastTrackReducer,
    fastTrackPricing: state.fastTrackPriceReducer,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    changeLanguageHandler: actsMaster.changeLanguageAction,
    changeCurrencyHandler: actsMaster.changeCurrencyAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MasterSideBar);
