import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import {Provider} from 'react-redux';

import DefaultLayout from './DefaultLayout';

import {currentCurrencyReducer, getCurrenciesReducer} from './reducers/common/currencies';

import {countryListReducer} from './reducers/air/asyncAir';
import {itineraryBusReducer} from './reducers/bus/itineraryBus';
import {getLegsReducer,airTripReducer,uniqueCarriersReducer} from './reducers/air/itineraryAir';
import {paymentMethodsReducer} from './reducers/air/masterAir';
import {contactMasterReducer, passengersMasterReducer} from './reducers/master/passengersMaster';
import {pricingMasterReducer, pricingMasterAnalysisReducer} from './reducers/master/pricingMaster';
import {getBagsReducer,purchasedBagsReducer} from './reducers/air/bagsAir';
import {airInsuranceReducer,purchasedInsuranceReducer} from './reducers/air/insuranceAir';
import {getMealsReducer,purchasedMealsReducer} from './reducers/air/mealsAir';
import {hasFlexibleTicketReducer,flexibleTicketReducer} from './reducers/air/flexibleTicket';
import {hasBlueRibbonReducer,getBlueRibbonReducer} from './reducers/air/blueRibbon';


import {getShipLegsReducer,shipTripReducer} from './reducers/ship/itineraryShip';
import {cabinsReducer} from './reducers/ship/cabins';
import {cabinSelectionReducer} from './reducers/ship/cabinSelection';

import './index.css';
import MasterApp from './components/Master/MasterApp';



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
        getShipLegsReducer,
        shipTripReducer,
        cabinsReducer,
        cabinSelectionReducer,
        countryListReducer,
        routing: routerReducer
    }),
    applyMiddleware(thunk),
);




ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <DefaultLayout exact path="/air" component={()=><MasterApp product="air"/>}/>
                <DefaultLayout exact path="/ship" component={()=><MasterApp product="ship"/>}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
