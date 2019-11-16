import React, { Component, createContext } from 'react';

import Russia from './../../locales/ru.json';
import Bokmal from './../../locales/no.json';


export const DataContext = createContext();

class DataContextProvider extends Component {
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
        translations: {ru: Russia, no:Bokmal}
    };

    updateChosenLang(newLang){
        this.setState({
            lang: newLang
        });

    }


    render() {
        return (
            <DataContext.Provider    value={{
                state: this.state,
                functions : {
                    updateChosenLang : this.updateChosenLang
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataContextProvider;
