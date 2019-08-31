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

import { currentCurrencyReducer, getCurrenciesReducer } from './reducers/common/currencies';

import { countryListReducer } from './reducers/air/asyncAir';
import { getLegsReducer, airTripReducer, uniqueCarriersReducer } from './reducers/air/itineraryAir';
import { fetchCabinPaxPerSegmentReducer } from './reducers/air/cabins';
import { fetchPreseatSelectedPaxReducer, seatMapInfoReducer, fetchSeatSelectionReducer } from './reducers/air/preseat';
import { contactMasterReducer, passengersMasterReducer } from './reducers/master/passengersMaster';
import { pricingMasterReducer, pricingUpsalesMasterReducer, ticketPricesReducer } from './reducers/master/pricingMaster';
import { getBagsReducer, purchasedBagsReducer, getLimitBagReducer } from './reducers/air/bagsAir';
import { airInsuranceReducer, purchasedInsuranceReducer } from './reducers/air/insuranceAir';
import { getMealsReducer, purchasedMealsReducer } from './reducers/air/mealsAir';
import { hasFlexibleTicketReducer, flexibleTicketReducer,getFlexibleTicketFinalCostReducer } from './reducers/air/flexibleTicket';
import { hasBlueRibbonReducer, getBlueRibbonReducer, getBlueRibbonFinalCostReducer } from './reducers/air/blueRibbon';
import { hasWebCheckinReducer, webCheckinPriceReducer ,getWebCheckinFinalCostReducer } from './reducers/air/webCheckin';
import { hasLoungeAccessReducer, loungeBookingsReducer, loungeAccessPricesReducer } from './reducers/air/lounge';
import { getParkingDaysReducer, getParkPricingReducer, getParkPricingFinalCostReducer } from './reducers/air/parking';
import { hasFastTrackReducer, fastTrackPriceReducer,getFastTrackFinalCostReducer ,getPurchaseCostFastTrackReducer } from './reducers/air/fastTrack';
import { hasAirHelpReducer, airHelpPriceReducer,  getAirHelpFinalCostReducer} from './reducers/air/airHelp';

import { getLanguagesReducer } from './reducers/common/languages';

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
  uniqueCarriersReducer,
  hasFlexibleTicketReducer,
  flexibleTicketReducer,
  getFlexibleTicketFinalCostReducer,
  hasBlueRibbonReducer,
  getWebCheckinFinalCostReducer,
  getBlueRibbonReducer,
  getBlueRibbonFinalCostReducer,
  countryListReducer,
  fetchPreseatSelectedPaxReducer,
  seatMapInfoReducer,
  getLanguagesReducer,
  hasWebCheckinReducer,
  webCheckinPriceReducer,
  hasLoungeAccessReducer,
  loungeBookingsReducer,
  loungeAccessPricesReducer,
  getParkingDaysReducer,
  getParkPricingReducer,
  getParkPricingFinalCostReducer,  
  getFastTrackFinalCostReducer,
  fastTrackPriceReducer,
  hasFastTrackReducer,
  hasAirHelpReducer,
  airHelpPriceReducer,
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
