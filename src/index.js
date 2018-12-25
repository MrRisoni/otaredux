import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {
  loadTranslations, setLocale, syncTranslationWithStore, i18nReducer,
} from 'react-redux-i18n';

import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import DefaultLayout from './DefaultLayout';

import { currentCurrencyReducer, getCurrenciesReducer } from './reducers/common/currencies';

import { countryListReducer } from './reducers/air/asyncAir';
import { getLegsReducer, airTripReducer, uniqueCarriersReducer } from './reducers/air/itineraryAir';
import {fetchCabinPaxPerSegmentReducer} from './reducers/air/cabins';
import {fetchPreseatSelectedPaxReducer} from './reducers/air/preseat';
import {
  contactMasterReducer, passengersMasterReducer} from './reducers/master/passengersMaster';
import { pricingMasterReducer, pricingMasterAnalysisReducer, ticketPricesReducer } from './reducers/master/pricingMaster';
import { getBagsReducer, purchasedBagsReducer } from './reducers/air/bagsAir';
import { airInsuranceReducer, purchasedInsuranceReducer } from './reducers/air/insuranceAir';
import { getMealsReducer, purchasedMealsReducer } from './reducers/air/mealsAir';
import { hasFlexibleTicketReducer, flexibleTicketReducer } from './reducers/air/flexibleTicket';
import { hasBlueRibbonReducer, getBlueRibbonReducer } from './reducers/air/blueRibbon';
import { preSeatSelectedItemsReducer, seatMapInfoReducer } from './reducers/air/preseat';
import { getLanguagesReducer } from './reducers/common/languages';

import './index.css';

import MasterApp from './components/Master/MasterApp';

import Russia from './locales/ru.json';
import Germany from './locales/de.json';


const store = createStore(combineReducers({
  ticketPricesReducer,
  fetchCabinPaxPerSegmentReducer,
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
  hasFlexibleTicketReducer,
  flexibleTicketReducer,
  hasBlueRibbonReducer,
  getBlueRibbonReducer,
  countryListReducer,
  fetchPreseatSelectedPaxReducer,
  preSeatSelectedItemsReducer,
  seatMapInfoReducer,
  getLanguagesReducer,
  routing: routerReducer,
  i18n: i18nReducer,
}),
applyMiddleware(thunk));


const locales = {
  en: {
    SelectCabinPerSegment: 'Select Cabin Per Segment',
  },
  ru: Russia,
  de: Germany,
};

syncTranslationWithStore(store);
store.dispatch(loadTranslations(locales));
store.dispatch(setLocale('en'));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <DefaultLayout exact path="/" component={() => <MasterApp product="air" />} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
