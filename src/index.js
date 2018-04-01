import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import {Provider} from 'react-redux';


import {currentCurrencyReducer, getCurrenciesReducer} from './reducers/common/currencies';


import {itineraryBusReducer} from './reducers/bus/itineraryBus';
import {getLegsReducer,airTripReducer} from './reducers/air/itineraryAir';
import {paymentMethodsReducer} from './reducers/air/masterAir';
import {contactMasterReducer, passengersMasterReducer} from './reducers/master/passengersMaster';
import {pricingMasterReducer, pricingMasterAnalysisReducer} from './reducers/master/pricingMaster';
import {getBagsReducer,purchasedBagsReducer} from './reducers/air/bagsAir';
import {airInsuranceReducer,purchasedInsuranceReducer} from './reducers/air/insuranceAir';
import {getMealsReducer,purchasedMealsReducer} from './reducers/air/mealsAir';
import {hasFlexibleTicketReducer,flexibleTicketReducer} from './reducers/air/flexibleTicket';
import {hasBlueRibbonReducer,getBlueRibbonReducer} from './reducers/air/blueRibbon';


import './index.css';
import MasterApp from './components/Master/MasterApp';

import Home from './components/Common/Home';


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
        paymentMethodsReducer,
        hasFlexibleTicketReducer,
        flexibleTicketReducer,
        hasBlueRibbonReducer,
        getBlueRibbonReducer,
        routing: routerReducer
    }),
    applyMiddleware(thunk),
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/bus"  render={()=><MasterApp product="bus"/>}/>
                <Route exact path="/air"  render={()=><MasterApp product="air"/>}/>
                <Route exact path="/hotel"  render={()=><MasterApp product="hotel"/>}/>
                <Route exact path="/ship"  render={()=><MasterApp product="ship"/>}/>
                <Route exact path="/train"  render={()=><MasterApp product="train"/>}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
