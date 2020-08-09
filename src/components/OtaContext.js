import React, { Component, createContext } from "react";

import Russian from "./../locales/ru.json";
import Bokmal from "./../locales/no.json";
import German from "./../locales/de.json";
import French from "./../locales/fr.json";
import Swedish from "./../locales/sv.json";
import English from "./../locales/en.json";

import MealsRsc from "./../resources/meals.json";
import ItineraryRsc from "./../resources/itinerary.json";
import InsurancesRsc from "./../resources/insurances.json";
import FastTrackRsc from "./../resources/fastTrack.json";
import LoungeRsc from "./../resources/lounge.json";
import CountriesRsc from "./../resources/countries.json";
import BagsRsc from "./../resources/bags.json";
import ParkingRsc from "./../resources/parking.json";

export const DataContext = createContext();

class OtaContextProvider extends Component {
  state = {
    contactData: {
      surname: "",
      name: "",
      gender: "",
      prefix: "",
      mobile: "",
      email: "",
      country: "",
      city: "",
      address: "",
      postcode: ""
    },
    MealsRsc: MealsRsc,
    ItineraryRsc: ItineraryRsc,
    CountriesRsc: CountriesRsc,
    ParkingRsc: ParkingRsc,
    BagsRsc: BagsRsc,
    upsalesPricing: {
      fastTrack: FastTrackRsc,
      Lounge: LoungeRsc,
      Insurance: InsurancesRsc,
      webCheckin: 2,
      airHelp: 1.56,
      flexTicket: 5,
      blueRibbon: 5
    },
    totalCost: 0,
    totalFare: 0,
    totalTax: 0,
    upsales: {
      webCheckinCost: 0,
      webCheckinCostEur: 0,
      mealsCost: 0,
      mealsCostEur: 0,
      fastTrackCost: 0,
      fastTrackCostEur: 0,
      blueRibbonCost: 0,
      blueRibbonCostEur: 0,
      airHelpCost: 0,
      airHelpCostEur: 0,
      insuranceCost: 0,
      insuranceCostEur: 0,
      loungeCost: 0,
      loungeCostEur: 0,
      loungeHours: {
        "TRF" :0,
      },
      flexTicketCost: 0,
      flexTicketCostEur: 0,
      bagsCost: 0,
      bagsCostEur: 0,
      parking: {
        cost: 0,
        costEur: 0,
        days: 0
      }
    },
    numADT: 1,
    numCNN: 0,
    numINF: 0,
    passengers: [
      {
        id: 0,
        humanId: 1,
        active: true,
        ptc: "ADT",
        name: "",
        surname: "",
        gender: "",
        dob: "",
        pricing: [
          {
            legId: 0,
            class: "Y",
            fareEur: 0,
            taxEur: 0,
            ttl: 0
          },
          {
            legId: 1,
            class: "Y",
            fareEur: 0,
            taxEur: 0,
            ttl: 0
          }
        ],
        passport: {
          issueCountry: "",
          nationality: "",
          expiresAt: "",
          passNo: ""
        },
        upsalesData: {
          insurance: {
            code: "",
            cost: 0,
            costEur: 0
          },
          meals: [
            { leg: 0, choice: "", cost: 0, costEur: 0 },
            { leg: 1, choice: "", cost: 0, costEur: 0 }
          ],
          bags: [
            { leg: 0, num: 0, cost: 0, costEur: 0 },
            { leg: 1, num: 0, cost: 0, costEur: 0 }
          ]
        }
      }
    ],
    lang: "ru",
    languages: [
      {
        code: "ru",
        title: "русский"
      },
      {
        code: "en",
        title: "English"
      },
      {
        code: "fr",
        title: "Français"
      },
      {
        code: "de",
        title: "Deutsch"
      },
      {
        code: "no",
        title: "Bokmål"
      },
      {
        code: "sv",
        title: "Svenska"
      }
    ],
    translations: {
      ru: Russian,
      no: Bokmal,
      de: German,
      en: English,
      fr: French,
      sv: Swedish
    },
    currencies: [
      {
        code: "EUR",
        rate: 1.0
      },
      {
        code: "USD",
        rate: 1.14
      },
      {
        code: "CHF",
        rate: 1.13
      },
      {
        code: "RUB",
        rate: 70.09
      },
      {
        code: "NOK",
        rate: 10.94
      },
      {
        code: "SEK",
        rate: 10.94
      }
    ],
    currentCurrency: {
      code: "CHF",
      rate: 1.13
    }
  };

  updateChosenLang = newLang => {
    this.setState({
      lang: newLang
    });
  };

  editPassenger = data => {
    let isFirstHuman = false;

    let newPaxes = this.state.passengers.map(px => {
      if (px.id != data.paxId) {
        return px;
      } else {
        isFirstHuman = px.humanId == 1;
        if (data.field === "ptc") {
          return {
            ...px,
            ptc: data.newPtc
          };
        }
        if (data.field === "name") {
          return {
            ...px,
            name: data.name
          };
        }
        if (data.field === "surname") {
          return {
            ...px,
            surname: data.surname
          };
        }
        if (data.field === "gender") {
          return {
            ...px,
            gender: data.gender
          };
        }
      }
    });
    let adt = 0;
    let cnn = 0;
    let inf = 0;

    newPaxes.forEach(px => {
      if (px.active) {
        if (px.ptc == "ADT") {
          adt++;
        }
        if (px.ptc == "CNN") {
          cnn++;
        }
        if (px.ptc == "INF") {
          inf++;
        }
      }
    });

    this.setState({
      passengers: newPaxes,
      numADT: adt,
      numCNN: cnn,
      numINF: inf
    });
    this.firstLoad();
  };

  removePassenger = paxId => {
    const self = this;
    let newPaxes = this.state.passengers.filter(pax => {
      if (pax.id != paxId) {
        return pax;
      }
    });
    // recalc humanIds and nums per ptc
    let humanId = 1;
    newPaxes.forEach(px => {
      px.humanId = humanId;
      humanId++;
    });

    let adt = 0;
    let cnn = 0;
    let inf = 0;

    this.state.passengers.forEach(px => {
      if (px.active) {
        if (px.ptc == "ADT") {
          adt++;
        }
        if (px.ptc == "CNN") {
          cnn++;
        }
        if (px.ptc == "INF") {
          inf++;
        }
      }
    });

    this.setState({
      passengers: newPaxes,
      numADT: adt,
      numCNN: cnn,
      numINF: inf
    });

    this.firstLoad();
  };

  addPassenger = () => {
    const self = this;

    let newHumanId = this.state.passengers.filter(pax => pax.active).length + 1;

    let newPaxObj = {
      id: this.state.passengers.length,
      humanId: newHumanId,
      active: true,
      ptc: "ADT",
      name: "",
      surname: "",
      gender: "",
      dob: "",
      pricing: [
        {
          legId: 0,
          class: "Y",
          fareEur: 0,
          taxEur: 0,
          ttl: 0
        },
        {
          legId: 1,
          class: "Y",
          fareEur: 0,
          taxEur: 0,
          ttl: 0
        }
      ],
      passport: {
        issueCountry: "",
        nationality: "",
        expiresAt: "",
        passNo: ""
      },
      upsalesData: {
        insurance: {
          code: "",
          cost: 0,
          costEur: 0
        },
        meals: [
          { leg: 0, choice: "", cost: 0, costEur: 0 },
          { leg: 1, choice: "", cost: 0, costEur: 0 }
        ],
        bags: [
          { leg: 0, num: 0, cost: 0, costEur: 0 },
          { leg: 1, num: 0, cost: 0, costEur: 0 }
        ]       
      }
    };

    let paxes = self.state.passengers;
    let adts = self.state.numADT++;
    paxes.push(newPaxObj);

    this.setState({
      passengers: paxes,
      numADT: adts
    });

    this.firstLoad();
  };

  getActivePaxesLen = () => {
    return this.state.passengers.filter(px => px.active).length;
  };

  firstLoad = () => {
    var ttl = 0;
    var ttlFare = 0;
    var ttlTax = 0;
    var fareEur = 0;
    var taxesEur = 0;
    var passengersNew = this.state.passengers;

    ttl += parseFloat(this.state.upsales.blueRibbonCost);
    ttl += parseFloat(this.state.upsales.webCheckinCost);
    ttl += parseFloat(this.state.upsales.flexTicketCost);
    ttl += parseFloat(this.state.upsales.airHelpCost);
    ttl += parseFloat(this.state.upsales.fastTrackCost);
    ttl += parseFloat(this.state.upsales.bagsCost);
    ttl += parseFloat(this.state.upsales.mealsCost);
    ttl += parseFloat(this.state.upsales.loungeCost);
    ttl += parseFloat(this.state.upsales.parking.cost);

    for (var p = 0; p < this.state.passengers.length; p++) {
      if (this.state.passengers[p].active) {
        var ptc = this.state.passengers[p].ptc;

        ttl += parseFloat(
          this.state.passengers[p].upsalesData["insurance"]["costEur"]
        );
   
        var pricingNew = [];

        for (var legId = 0; legId < this.state.ItineraryRsc.length; legId++) {
          for (
            var pr = 0;
            pr < this.state.ItineraryRsc[legId].pricing.length;
            pr++
          ) {

            if (this.state.ItineraryRsc[legId].pricing[pr].ptc == ptc) {
              fareEur = parseFloat(
                this.state.ItineraryRsc[legId].pricing[pr].fareEur
              );
              taxesEur = parseFloat(
                this.state.ItineraryRsc[legId].pricing[pr].taxesEur
              );

              pricingNew.push({
                legId: legId,
                class: "Y",
                fareEur: fareEur,
                taxEur: taxesEur,
                ttl: 0
              });

              ttlFare += fareEur;
              ttlTax += taxesEur;

              ttl += fareEur;
              ttl += taxesEur;
            }
          }
        }
      }
    }

    ttl = (ttl * this.state.currentCurrency.rate).toFixed(2);
    ttlFare = (ttlFare * this.state.currentCurrency.rate).toFixed(2);
    ttlTax = (ttlTax * this.state.currentCurrency.rate).toFixed(2);

    this.setState({
      totalCost: ttl,
      totalFare: ttlFare,
      totalTax: ttlTax
    });
  };

  purchaseInsurance = data => {
    let paxsnew = this.state.passengers;
    let insuranceOpt = this.state.upsalesPricing.Insurance.filter(insItm => {
      return insItm.id == data.insuranceId;
    })[0];

    for (var p = 0; p < paxsnew.length; p++) {
      if (paxsnew[p].id === data.pax.id) {
        paxsnew[p].upsalesData["insurance"]["code"] = insuranceOpt.code;
        let euroCost =
          data.pax["ptc"] === "ADT"
            ? insuranceOpt.costEuro["ADT"]
            : insuranceOpt.costEuro["CNN"];
        euroCost = parseFloat(euroCost);
        euroCost = euroCost.toFixed(2);

        paxsnew[p].upsalesData["insurance"]["costEur"] = euroCost;
        paxsnew[p].upsalesData["insurance"]["cost"] =
          euroCost * this.state.currentCurrency.rate;
      }
    }

    let upsalesNew = this.state.upsales;
    let newInsuranceCost = 0;
    let newInsuranceCostEur = 0;

    paxsnew.forEach(px => {
      if (px.active) {
        newInsuranceCostEur += px.upsalesData["insurance"]["costEur"];
        newInsuranceCost +=
          px.upsalesData["insurance"]["costEur"] *
          this.state.currentCurrency.rate;
      }
    });

    upsalesNew.insuranceCostEur = newInsuranceCost.toFixed(2);
    upsalesNew.insuranceCost =
      newInsuranceCost * this.state.currentCurrency.rate;
    upsalesNew.insuranceCost = upsalesNew.insuranceCost.toFixed(2);

    this.setState({
      passengers: paxsnew,
      upsales: upsalesNew
    });

    this.firstLoad();
  };

  updateTotalCost() {}

  purchaseFastTrack = data => {
    let new_upsales = this.state.upsales;
    new_upsales.fastTrackCost = 0;
    new_upsales.fastTrackCostEur = 0;
    if (data.add === 1) {
      new_upsales.fastTrackCost = this.state.upsalesPricing["fastTrack"][
        data.point
      ];
      new_upsales.fastTrackCostEur =
        new_upsales.fastTrackCost * this.state.currentCurrency.rate;
    }

    this.setState({
      upsales: new_upsales
    });

    this.firstLoad();
  };

  actionBlueRibbon = yay => {
    let brbEur =
      this.state.upsalesPricing.blueRibbon *
      (this.state.numADT + this.state.numCNN);
    let brb =
      this.state.upsalesPricing.blueRibbon *
      (this.state.numADT + this.state.numCNN) *
      this.state.currentCurrency.rate;

    brbEur = brbEur.toFixed(2);
    brb = brb.toFixed(2);

    let new_upsales = this.state.upsales;
    new_upsales.blueRibbonCost = 0;
    new_upsales.blueRibbonCostEur = 0;

    if (yay == 1) {
      new_upsales.blueRibbonCost = brb;
      new_upsales.blueRibbonCostEur = brbEur;
    }

    this.setState({
      upsales: new_upsales
    });

    this.firstLoad();
  };

  actionWebCheckin = yay => {
    let webCheckEur =
      this.state.upsalesPricing.blueRibbon *
      (this.state.numADT + this.state.numCNN);
    let webCheck =
      this.state.upsalesPricing.blueRibbon *
      (this.state.numADT + this.state.numCNN) *
      this.state.currentCurrency.rate;

    webCheckEur = webCheckEur.toFixed(2);
    webCheck = webCheck.toFixed(2);

    let new_upsales = this.state.upsales;
    if (yay == 1) {
      new_upsales.webCheckinCost = webCheck;
      new_upsales.webCheckinCostEur = webCheckEur;
    } else {
      new_upsales.webCheckinCost = 0;
      new_upsales.webCheckinCostEur = 0;
    }

    this.setState({
      upsales: new_upsales
    });

    this.firstLoad();
  };

  updateTotalCost() {}

  actionFlexTicket = yay => {
    let flxEur =
      this.state.upsalesPricing.flexTicket *
      (this.state.numADT + this.state.numCNN);
    let flx =
      this.state.upsalesPricing.flexTicket *
      (this.state.numADT + this.state.numCNN) *
      this.state.currentCurrency.rate;

    flxEur = flxEur.toFixed(2);
    flx = flx.toFixed(2);

    let new_upsales = this.state.upsales;
    if (yay == 1) {
      new_upsales.flexTicketCost = flx;
      new_upsales.flexTicketCostEur = flxEur;
    } else {
      new_upsales.flexTicketCost = 0;
      new_upsales.flexTicketCostEur = 0;
    }

    this.setState({
      upsales: new_upsales
    });

    this.firstLoad();
  };

  actionMeal = data => {
    let new_paxes = this.state.passengers;
    let new_upsales = this.state.upsales;
    let finalMealsCost = 0;

    let newPaxes = this.state.passengers.map(px => {
      if (px.id != data.paxId) {
        return px;
      } else {
        let newMealData = px.upsalesData.meals;
        newMealData.forEach(mlLeg => {
          if (mlLeg.leg == data.legId) {
            mlLeg.cost = 0;
            const funden = this.state.MealsRsc.filter(
              mlItm => mlItm.ssr == data.option && mlItm.legId == data.legId
            );
            if (funden.length == 1) {
              mlLeg.cost = funden[0].price;
            }
            mlLeg.choice = data.option;
          }
        });

        return {
          ...px,
          upsalesData: {
            ...px.upsalesData,
            meals: newMealData
          }
        };
      }
    });

    newPaxes.forEach(px => {
      px.upsalesData.meals.forEach(ml => {
        finalMealsCost += parseFloat(ml.cost);
      });
    });

    new_upsales.mealsCost = parseFloat(finalMealsCost);
    new_upsales.mealsCost = new_upsales.mealsCost.toFixed(2);
      this.setState({
      upsales: new_upsales,
      passengers: newPaxes
    });

    this.firstLoad();
  };

  actionBag = data => {
    let new_paxes = this.state.passengers;

    const prices = this.getBagPrices(data);
    let new_upsales = this.state.upsales;

    let finalbagsCost = 0;

    let newPaxes = this.state.passengers.map(px => {
      if (px.id != data.paxId) {
        return px;
      } else {
        let newBagData = px.upsalesData.bags;
        newBagData.forEach(bgleg => {
          if (bgleg.leg == data.legId) {
            bgleg.cost = 0;
            if (data.option == 1) {
              bgleg.cost = prices.priceOneBags;
            }
            if (data.option == 2) {
              bgleg.cost = prices.priceTwoBags;
            }

            bgleg.num = data.option;
          }
        });


        return {
          ...px,
          upsalesData: {
            ...px.upsalesData,
            bags: newBagData
          }
        };
      }
    });

    newPaxes.forEach(px => {
      px.upsalesData.bags.forEach(bg => {
        finalbagsCost += parseFloat(bg.cost);
      });
    });

    new_upsales.bagsCost = parseFloat(finalbagsCost);
    new_upsales.bagsCost = new_upsales.bagsCost.toFixed(2);
   
    this.setState({
      upsales: new_upsales,
      passengers: newPaxes
    });

    this.firstLoad();
  };

  actionAirHelp = yay => {
    let airHelpEur =
      this.state.upsalesPricing.airHelp *
      (this.state.numADT + this.state.numCNN);
    let airHelp =
      this.state.upsalesPricing.airHelp *
      (this.state.numADT + this.state.numCNN) *
      this.state.currentCurrency.rate;

    airHelpEur = airHelpEur.toFixed(2);
    airHelp = airHelp.toFixed(2);

    let new_upsales = this.state.upsales;
    if (yay == 1) {
      new_upsales.airHelpCost = airHelp;
      new_upsales.airHelpCostEur = airHelpEur;
    } else {
      new_upsales.airHelpCost = 0;
      new_upsales.airHelpCostEur = 0;
    }

    this.setState({
      upsales: new_upsales
    });

    this.firstLoad();
  };


  actionLounge = data => {
     let new_upsales = this.state.upsales;
     if (data.num >0) {
      new_upsales.loungeHours[data.point]++;
     }
     else {
      new_upsales.loungeHours[data.point]--;
      if (new_upsales.loungeHours[data.point] <0) {
        new_upsales.loungeHours[data.point] = 0;
      }
     }
     const adt = this.state.upsalesPricing.Lounge[data.point].pricing['ADT'];
     const cnn = this.state.upsalesPricing.Lounge[data.point].pricing['CNN'];

     new_upsales.loungeCost = new_upsales.loungeHours[data.point] * adt +
     new_upsales.loungeHours[data.point] * cnn;

     this.setState({
      upsales: new_upsales
    });

    this.firstLoad();
  };

  getBagPrices = data => {
    let priceOneBags = 0;
    let priceTwoBags = 0;

    priceOneBags = this.state.BagsRsc[data.legId].pricing["firstBag"].filter(
      bg => bg.ptc == data.ptc
    )[0].costEur;

    priceTwoBags += this.state.BagsRsc[data.legId].pricing["secondBag"].filter(
      bg => bg.ptc == data.ptc
    )[0].costEur;

    priceOneBags *= this.state.currentCurrency.rate;
    priceOneBags = priceOneBags.toFixed(2);

    priceTwoBags *= this.state.currentCurrency.rate;
    priceTwoBags = priceTwoBags.toFixed(2);

    return { priceOneBags, priceTwoBags };
  };

  actionParking = data => {
    const originAirport = this.state.ItineraryRsc[0].from.iata;

    let totalParkDaysPriced = 0;

    let priceTheseDays =0;

    let remainingDays  = this.state.upsales.parking.days;

    if (data.sign>0) {
      remainingDays++;
    }
    else {
      remainingDays--;
      if (remainingDays <0) {
        remainingDays =0;
      }
    }
    let parkingDays  = remainingDays;

    let total = 0;
    this.state.ParkingRsc[originAirport].forEach( prkprc => {
        if (remainingDays >0) {
            if (remainingDays > prkprc.upToDays) {
                priceTheseDays = prkprc.upToDays;

                totalParkDaysPriced += priceTheseDays;
            } else {
                priceTheseDays = remainingDays - totalParkDaysPriced;
            }

            remainingDays -= priceTheseDays;
            total += priceTheseDays * prkprc.costEuro * this.state.currentCurrency.rate;
        }
    });
    let new_upsales = this.state.upsales;
    new_upsales.parking = {
      cost: total,
      costEur : 0,
      days: parkingDays,
    }


  this.setState({
      upsales: new_upsales
    });


    this.firstLoad();
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          functions: {
            updateChosenLang: this.updateChosenLang,
            addPassenger: this.addPassenger,
            removePassenger: this.removePassenger,
            editPassenger: this.editPassenger,
            firstLoad: this.firstLoad,
            actionBag: this.actionBag,
            actionMeal: this.actionMeal,
            actionLounge:this.actionLounge,
            actionParking: this.actionParking,
            getActivePaxesLen: this.getActivePaxesLen,
            purchaseInsurance: this.purchaseInsurance,
            purchaseFastTrack: this.purchaseFastTrack,
            actionBlueRibbon: this.actionBlueRibbon,
            actionFlexTicket: this.actionFlexTicket,
            actionWebCheckin: this.actionWebCheckin,
            actionAirHelp: this.actionAirHelp,
            getBagPrices: this.getBagPrices
          }
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default OtaContextProvider;
