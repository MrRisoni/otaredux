import React, { Component, createContext } from 'react';

import Russian from './../locales/ru.json';
import Bokmal from './../locales/no.json';
import German from './../locales/de.json';
import French from './../locales/fr.json';
import Swedish from './../locales/sv.json';
import English from './../locales/en.json';

import ItineraryRsc from './../resources/itinerary.json';


export const DataContext = createContext();

class OtaContextProvider extends Component {
    state = {
        contactData : {
            surname: 'FOOBAARR',
            name: 'BARBR',
            gender: '',
            prefix: '',
            mobile: '',
            email: '',
            country: '',
            city: '',
            address: '',
            postcode: '',
        },
        ItineraryRsc:ItineraryRsc,
        totalCost:0,
        totalFare:0,
        totalTax:0,
        upsales: {
          preseatingCost:0,
          preseatingCostEur:0,
          webCheckinCost:0,
          webCheckinCostEur:0,
          mealsCost:0,
          mealsCostEur:0,
          fastTrackCost:0,
          fastTrackCostEur:0,
          blueRibbonCost:0,
          blueRibbonCostEur:0,
          airHelpCost:0,
          airHelpCostEur:0,
          insuranceCost:0,
          insuranceCostEur:0,
          loungeCost:0,
          loungeCostEur:0,
          flexTicketCost:0,
          flexTicketCostEur:0,
          parking: {
            cost:0,
            costEur:0,
            days:0
          }
        },
        passengers : [
            {
                id: 0,
                humanId: 1,
                active: true,
                ptc: 'ADT',
                name: '',
                surname: '',
                gender: '',
                dob: '',
                meals:[],
                pricing:[
                  {
                    legId:0,class:'Y',fareEur:0,taxEur:0,ttl:0
                  },
                  {
                    legId:1,class:'Y',fareEur:0,taxEur:0,ttl:0
                  }
                ],
                passport: {
                    issueCountry: '',
                    nationality: '',
                    expiresAt: '',
                    passNo: '',
                },
                upsalesData:{
                  insurance: {
                    code:"",
                    cost:0,
                    costEur:0,
                  },
                  meals:[{leg:0,choice:'',cost:0,costEur:0},
                {leg:1,choice:'',cost:0,costEur:0}],
                preseating: {
                  totalCost:0,
                  totalEur:0,
                  choices:[
                    {segId:0,choice:'',cost:0,costEur:0}
                  ]
                }
              }
            }
        ],
        lang:'ru',
        languages:  [{
            code: 'ru',
            title: 'русский',
        },
        {
            code: 'en',
            title: 'English',
        },
        {
            code: 'fr',
            title: 'Français',
        },
        {
            code: 'de',
            title: 'Deutsch',
        },
        {
            code: 'no',
            title: 'Bokmål',
        },
        {
            code: 'sv',
            title: 'Svenska',
        }],
        translations: {ru: Russian, no:Bokmal, de:German,en:English,fr:French,sv:Swedish},
        currencies : [
            {
                code: 'EUR',
                rate: 1.00,
            },
            {
                code: 'USD',
                rate: 1.14,
            },
            {
                code: 'CHF',
                rate: 1.13,
            },
            {
                code: 'RUB',
                rate: 70.09,
            },
            {
                code: 'NOK',
                rate: 10.94,
            },
            {
                code: 'SEK',
                rate: 10.94,
            },
        ],
        currentCurrency : {
            code: 'EUR',
            rate: 1.00,
        }
    };

    updateChosenLang = (newLang) => {
        console.log('new lan is ' + newLang)
        this.setState({
            lang: newLang
        });
    }



    addPassenger = () => {
        const self = this;

        console.log(this.state);

        let newPaxObj =  {
            id: self.state.passengers.length,
            humanId: 1,
            active: true,
            ptc: 'ADT',
            name: '',
            surname: '',
            gender: '',
            dob: '',
            passport: {
                issueCountry: '',
                nationality: '',
                expiresAt: '',
                passNo: '',
            }
        };

        let paxes =self.state.passengers;
        paxes.push(newPaxObj);

        this.setState({
            passngers: paxes
        });

    }

    firstLoad= () => {

       var ttl=0;
       var ttlFare = 0;
       var ttlTax = 0;

       var passengersNew = this.state.passengers;

       for(var p=0;p< this.state.passengers.length; p++) {
         if (this.state.passengers[p].active) {
           var ptc = this.state.passengers[p].ptc;
           console.log('ptc is ' + ptc);
           var pricingNew = [];

            for (var legId=0; legId <this.state.ItineraryRsc.length; legId++) {
              console.log('legid is ' + legId);
               for (var pr =0 ; pr < this.state.ItineraryRsc[legId].pricing.length;pr++) {
                 console.log('pricingid is ' + pr);

                    if (this.state.ItineraryRsc[legId].pricing[pr].ptc == ptc) {
                      var fareEur = this.state.ItineraryRsc[legId].pricing[pr].fareEur;
                      var taxesEur = this.state.ItineraryRsc[legId].pricing[pr].taxesEur;

                          pricingNew.push({legId:legId,class:'Y',fareEur:fareEur,taxEur:taxesEur,ttl:0});

                          ttlFare += fareEur;
                          ttlTax += taxesEur;

                          ttl += fareEur;
                          ttl += taxesEur;


                    }
               }
            }
         }
       }

       console.log('Total cost is ' + ttl);
       this.setState({
           totalCost: ttl,
           totalFare:ttlFare,
           totalTax:ttlTax,
       });
    }

    render() {
        return (
            <DataContext.Provider    value={{
                 ...this.state,
                functions : {
                    updateChosenLang : this.updateChosenLang,
                    addPassenger: this.addPassenger,
                    firstLoad: this.firstLoad
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default OtaContextProvider;
