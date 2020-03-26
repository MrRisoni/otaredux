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



    addPassenger() {
     //   const self = this;

        console.log(this.state);

       /* let newPaxObj =  {
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

        this.setState({
            passngers: [...self.state.passngers, newPaxObj]
        }); */





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
