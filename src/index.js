import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';

import {combineReducers} from 'redux'
import {Provider} from 'react-redux';

import DefaultLayout from './DefaultLayout';

import {currentCurrencyReducer, getCurrenciesReducer} from './reducers/common/currencies';

import {countryListReducer,seatMapOKReducer} from './reducers/air/asyncAir';
import {getLegsReducer,airTripReducer,uniqueCarriersReducer} from './reducers/air/itineraryAir';
import {paymentMethodsReducer} from './reducers/air/masterAir';
import {contactMasterReducer, passengersMasterReducer,fetchPreseatSelectedPaxReducer} from './reducers/master/passengersMaster';
import {pricingMasterReducer, pricingMasterAnalysisReducer} from './reducers/master/pricingMaster';
import {getBagsReducer,purchasedBagsReducer} from './reducers/air/bagsAir';
import {airInsuranceReducer,purchasedInsuranceReducer} from './reducers/air/insuranceAir';
import {getMealsReducer,purchasedMealsReducer} from './reducers/air/mealsAir';
import {hasFlexibleTicketReducer,flexibleTicketReducer} from './reducers/air/flexibleTicket';
import {hasBlueRibbonReducer,getBlueRibbonReducer} from './reducers/air/blueRibbon';


import './index.css';
import MasterApp from './components/Master/MasterApp';


const translationsObject = {
        en: {
                application: {
                        title: 'Awesome app with i18n!',
                        hello: 'Hello, %{name}!'
                },
                date: {
                        long: 'MMMM Do, YYYY'
                },
                export: 'Export %{count} items',
                export_0: 'Nothing to export',
                export_1: 'Export %{count} item',
                two_lines: 'Line 1<br />Line 2',
                literal_two_lines: 'Line 1\
Line 2'
        },
        nl: {
                application: {
                        title: 'Toffe app met i18n!',
                        hello: 'Hallo, %{name}!'
                },
                date: {
                        long: 'D MMMM YYYY'
                },
                export: 'Exporteer %{count} dingen',
                export_0: 'Niks te exporteren',
                export_1: 'Exporteer %{count} ding',
                two_lines: 'Regel 1<br />Regel 2',
                literal_two_lines: 'Regel 1\
Regel 2'
        }
};




let store = createStore(combineReducers({
        currentCurrencyReducer,
        getCurrenciesReducer,
        contactMasterReducer,
        passengersMasterReducer,
        pricingMasterReducer,
        pricingMasterAnalysisReducer,
        airInsuranceReducer,
        getBagsReducer,
        purchasedBagsReducer,
        purchasedInsuranceReducer,
        getMealsReducer,
        purchasedMealsReducer,
        getLegsReducer,
        airTripReducer,
        uniqueCarriersReducer,
        paymentMethodsReducer,
        hasFlexibleTicketReducer,
        flexibleTicketReducer,
        hasBlueRibbonReducer,
        getBlueRibbonReducer,
        countryListReducer,
        seatMapOKReducer,
        fetchPreseatSelectedPaxReducer,
        routing: routerReducer,
        i18n: i18nReducer
    }),
    applyMiddleware(thunk),
);

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('nl'));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <DefaultLayout exact path="/" component={()=><MasterApp product="air"/>}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
