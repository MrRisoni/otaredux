import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer,
} from 'react-redux-i18n';

import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import DefaultLayout from './DefaultLayout';

import { currentCurrencyReducer, getCurrenciesReducer } from './reducers/common/currenciesRdc';

import { countryListReducer } from './reducers/air/asyncAirRdc';
import { getLegsReducer, airTripReducer, uniqueCarriersReducer } from './reducers/air/itineraryAirRdc';
import { fetchCabinPaxPerSegmentReducer } from './reducers/air/cabinsRdc';
import { fetchPreseatSelectedPaxReducer, seatMapInfoReducer, fetchSeatSelectionReducer } from './reducers/air/preseatRdc';
import { contactMasterReducer, passengersMasterReducer } from './reducers/master/passengersMasterRdc';
import { pricingMasterReducer, pricingUpsalesMasterReducer, ticketPricesReducer } from './reducers/master/pricingMasterRdc';
import { getBagsReducer, purchasedBagsReducer, getLimitBagReducer } from './reducers/air/bagsAirRdc';
import { airInsuranceReducer, purchasedInsuranceReducer } from './reducers/air/insuranceAirRdc';
import { getMealsReducer, purchasedMealsReducer } from './reducers/air/mealsAirRdc';
import { hasFlexibleTicketReducer, getPurchaseCostFlexTicketReducer, flexibleTicketPricingModelReducer,getFlexibleTicketFinalCostReducer } from './reducers/air/flexibleTicketRdc';
import { hasBlueRibbonReducer, getBlueRibbonFinalCostReducer ,BlueRibbonPricingModelReducer ,getPurchaseCostBlueRibbonReducer } from './reducers/air/blueRibbonRdc';
import { hasWebCheckinReducer, WebCheckinModelReducer ,getPurchaseCostWebCheckinReducer,getWebCheckinFinalCostReducer } from './reducers/air/webCheckinRdc';
import { hasLoungeAccessReducer, loungeBookingsReducer, loungeAccessPricesReducer } from './reducers/air/loungeRdc';
import { getParkingDaysReducer, getParkPricingReducer, getParkPricingFinalCostReducer } from './reducers/air/parkingRdc';
import { hasFastTrackReducer, getFastTrackFinalCostReducer,fastTrackPricingModelReducer ,getPurchaseCostFastTrackReducer } from './reducers/air/fastTrackRdc';
import { hasAirHelpReducer, getPurchasedCostAirHelpReducer,airHelpPricingModelReducer,  getAirHelpFinalCostReducer} from './reducers/air/airHelpRdc';
import {fetchBrandOffersReducer} from './reducers/air/brandedRdc';

import { getLanguagesReducer } from './reducers/common/languagesRdc';

import './index.css';

import MasterApp from './components/Master/MasterApp';

import Russia from './locales/ru.json';
import Germany from './locales/de.json';
import French from './locales/fr.json';
import English from './locales/en.json';
import Bokmal from './locales/no.json';


const store = createStore(combineReducers({
  fetchSeatSelectionReducer,
  ticketPricesReducer,
  fetchCabinPaxPerSegmentReducer,
  currentCurrencyReducer,
  getCurrenciesReducer,
  contactMasterReducer,
  passengersMasterReducer,
  pricingMasterReducer,
  pricingUpsalesMasterReducer,
  airInsuranceReducer,
  getBagsReducer,
  purchasedBagsReducer,
  purchasedInsuranceReducer,
  getMealsReducer,
  getLimitBagReducer,
  purchasedMealsReducer,
  getLegsReducer,
  airTripReducer,
        fetchBrandOffersReducer,
  uniqueCarriersReducer,
  hasFlexibleTicketReducer,
  flexibleTicketPricingModelReducer,
  getFlexibleTicketFinalCostReducer,
  getPurchaseCostFlexTicketReducer,
  hasBlueRibbonReducer,
  getPurchaseCostBlueRibbonReducer,
  BlueRibbonPricingModelReducer,
  getWebCheckinFinalCostReducer,
  getBlueRibbonFinalCostReducer,
  countryListReducer,
  fetchPreseatSelectedPaxReducer,
  seatMapInfoReducer,
  getLanguagesReducer,
  hasWebCheckinReducer,
  getPurchaseCostWebCheckinReducer,
  WebCheckinModelReducer,
  hasLoungeAccessReducer,
  loungeBookingsReducer,
  loungeAccessPricesReducer,
  getParkingDaysReducer,
  fastTrackPricingModelReducer,
  getParkPricingReducer,
  getParkPricingFinalCostReducer,
  getFastTrackFinalCostReducer,
  hasFastTrackReducer,
  hasAirHelpReducer,
  airHelpPricingModelReducer,
  getPurchasedCostAirHelpReducer,
  getAirHelpFinalCostReducer,
  getPurchaseCostFastTrackReducer,
  routing: routerReducer,
  i18n: i18nReducer,
}),
applyMiddleware(thunk));


const locales = {
  en: English,
  fr: French,
  ru: Russia,
  de: Germany,
  no: Bokmal,
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
