import React, { Component, createContext } from 'react';

import Russian from './../locales/ru.json';
import Bokmal from './../locales/no.json';
import German from './../locales/de.json';
import French from './../locales/fr.json';
import Swedish from './../locales/sv.json';
import English from './../locales/en.json';



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
          parking: {
            cost:0,
            costEur:0,
            days:0
          }
        }
        passengers : [
            {
                id: 0,
                humanId: 1,
                active: true,
                type: 'ADT',
                name: '',
                surname: '',
                gender: '',
                dob: '',
                passport: {
                    issueCountry: '',
                    nationality: '',
                    expiresAt: '',
                    passNo: '',
                },
                upsalesData:{
                  insurance: {
                    "code" :"",
                    cost:0,
                    costEur:0,
                  }
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
            type: 'ADT',
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


    render() {
        return (
            <DataContext.Provider    value={{
                 ...this.state,
                functions : {
                    updateChosenLang : this.updateChosenLang,
                    addPassenger: this.addPassenger
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default OtaContextProvider;
