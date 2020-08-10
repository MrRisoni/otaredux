import React, { Component } from "react";
import { DataContext } from "../../OtaContext";
import SideBarUpsale from "./SideBarUpsale";
import FareTaxes from "./../Segments/FareTaxes";

class MasterSideBar extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);

    this.updateChosenLangLcl = this.updateChosenLangLcl.bind(this);
  }

  updateChosenLangLcl(ev) {
    this.context.functions.updateChosenLang(ev.target.value);
  }
  render() {
    let otherUpsalesDiv = [];

    if (this.context.upsales.bagsCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Bags"
          price={this.context.upsales.bagsCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.mealsCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          key="meals"
          title="Meals"
          price={this.context.upsales.mealsCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.blueRibbonCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Blue Ribbon"
          price={this.context.upsales.blueRibbonCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.flexTicketCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Flex Ticket"
          price={this.context.upsales.flexTicketCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.webCheckinCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Web Checkin"
          price={this.context.upsales.webCheckinCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.loungeCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Lounge"
          price={this.context.upsales.loungeCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.airHelpCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Air Help"
          price={this.context.upsales.airHelpCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.insuranceCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Insurance"
          price={this.context.upsales.insuranceCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.fastTrackCost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title="Fast Track"
          price={this.context.upsales.fastTrackCost}
          currency={this.context.currentCurrency}
        />
      );
    }

    if (this.context.upsales.parking.cost > 0) {
      otherUpsalesDiv.push(
        <SideBarUpsale
          title={`Parking ${this.context.upsales.parking.days} days`}
          price={this.context.upsales.parking.cost}
          currency={this.context.currentCurrency}
        />
      );
    }

    return (
      <div className="pricebox ">
        <FareTaxes />

        <div className="card bg-info">
          <div className="card-header">
            <div className="row">
              <div className="col-8">
                <h6>{this.context.translations[this.context.lang].pricebox.PriceAnalysis}</h6>
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
                  {this.context.translations[this.context.lang].general.Expand}
                </button>
              </div>
            </div>
          </div>

          <div className="card-body show text-white" id="priceBoxCollapse">
            <SideBarUpsale
              title={this.context.translations[this.context.lang].pricebox.Total}
              price={this.context.totalCost}
              currency={this.context.currentCurrency}
            ></SideBarUpsale>
            <SideBarUpsale
              title={this.context.translations[this.context.lang].pricebox.Fare}
              price={this.context.totalFare}
              currency={this.context.currentCurrency}
            ></SideBarUpsale>

            <SideBarUpsale
              title={this.context.translations[this.context.lang].pricebox.Tax}
              price={this.context.totalTax}
              currency={this.context.currentCurrency}
            ></SideBarUpsale>

            {otherUpsalesDiv}

            <div className="row langSelector">
              <div className="col-8 offset-2">
                <select
                  className="form-control"
                  id="langSelect"
                  onChange={this.updateChosenLangLcl}
                >
                  <option value="en">
                    {this.context.translations[this.context.lang].pricebox.ChangeLang}
                  </option>
                  {this.context.languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="row selectLang">
                  <div className="col-8 offset-2">
                    <select 
                      className="form-control"
                      onChange={this.props.changeCurrencyHandler}
                    >
                      <option value="">
                        {this.context.translations[this.context.lang].pricebox.ChangeCur}
                      </option>
                      {this.context.currencies.map(cur => (
                        <option key={cur.code} value={cur.code}>
                          {cur.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row addOnePassenger">
              <div className="col-12">
                <button className="btn btn-primary btn-success">
                {this.context.translations[this.context.lang].pricebox.Checkout}
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
