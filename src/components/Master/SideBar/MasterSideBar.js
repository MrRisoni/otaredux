import React, { Component } from 'react';
import {DataContext} from "../../OtaContext";
import SideBarUpsale from "./SideBarUpsale";
import FareTaxes from './../Segments/FareTaxes';


class MasterSideBar extends Component {

    static contextType = DataContext;
    constructor(props) {
        super(props);

        this.updateChosenLangLcl = this.updateChosenLangLcl.bind(this);

    }

    updateChosenLangLcl(ev) {
        console.log(ev.target.value);
        this.context.functions.updateChosenLang(ev.target.value);
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

    let otherUpsalesDiv = [];


    if (this.context.upsales.blueRibbonCost >0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Blue Ribbon"
          price={this.context.upsales.blueRibbonCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.flexTicketCost >0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Flex Ticket"
          price={this.context.upsales.flexTicketCost}
          currency={this.context.currentCurrency}
        />
      );
    }


    if (this.context.upsales.webCheckinCost >0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Web Checkin"
          price={this.context.upsales.webCheckinCost}
          currency={this.context.currentCurrency}
        />
      );
    }


    if (this.context.upsales.airHelpCost >0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Air Help"
          price={this.context.upsales.airHelpCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.insuranceCost >0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Insurance"
          price={this.context.upsales.insuranceCost}
          currency={this.context.currentCurrency}
        />
      );
    }

   /* this.props.passengers.forEach(pax => {
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
              price={this.props.overallParkingPrice}
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

    */



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
                  ExpandTranltr
                    {/* <Translate value="general.Expand" /> */}
                </button>
              </div>


            </div>
          </div>

          <div className="card-body show text-white" id="priceBoxCollapse">



            <SideBarUpsale title={"Total"} price={this.context.totalCost} currency={this.context.currentCurrency}></SideBarUpsale>
            <SideBarUpsale title={"Fare"} price={this.context.totalFare} currency={this.context.currentCurrency}></SideBarUpsale>

            <SideBarUpsale title={"Taxes"} price={this.context.totalTax} currency={this.context.currentCurrency}></SideBarUpsale>

            <hr/>
              <hr/>
                <hr/>
                {otherUpsalesDiv}

              {/*   {bagsDiv}
            {insuranceDiv}
            {mealsDiv}
            {otherUpsalesDiv} */}


            {/*  <div className="row">
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
            </div> */}





            <div className="row langSelector">
              <div className="col-8 offset-2">
                <select
                  className="form-control"
                  id="exampleFormControlSelect2"
                  onChange={this.updateChosenLangLcl}
                >
                  <option value="en">
                      {this.context.translations['ru'].pricebox.ChangeLang}
                  </option>
                  {this.context.languages.map(lang => (<option key={lang.code} value={lang.code}>{lang.title}</option>))}
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
                            {this.context.translations['ru'].pricebox.ChangeCur}

                          </option>
                      {this.context.currencies.map(cur => (<option value={cur.code}>{cur.code}</option>))}
                    </select>
                  </div>
                </div>

              </div>
            </div>



            
            <div className="row addOnePassenger  passengerListCollapse">
              <div className="col-12">

                        <button className="btn btn-primary btn-success">
                           Checkout
                        </button>
                    
              </div>
            </div>


          </div>

        </div>
      </div>


    );
  }
}

export default MasterSideBar;
