import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import {Provider} from 'react-redux';


import {bagsReducer} from './reducers/air/bagsAir';
import {currentCurrencyReducer, getCurrenciesReducer} from './reducers/common/currencies';


import {contactAirReducer, passengersAirReducer} from './reducers/air/passengers';
import {pricingAirReducer, pricingAirAnalysisReducer} from './reducers/air/pricingAir';


import {contactBusReducer, passengersBusReducer} from './reducers/bus/passengersBus';
import {itineraryBusReducer} from './reducers/bus/itineraryBus';
import {pricingBusReducer, pricingBusAnalysisReducer} from './reducers/bus/pricingBus';


import {contactMasterReducer, passengersMasterReducer} from './reducers/master/passengersMaster';
import {pricingMasterReducer, pricingMasterAnalysisReducer} from './reducers/master/pricingMaster';

import './index.css';
import Bus from './components/Bus/BusApp';
import AirApp from './components/Air/AirApp';
import MasterApp from './components/Master/MasterApp';

import Home from './components/Common/Home';


let store = createStore(combineReducers({
        bagsReducer,
        currentCurrencyReducer,
        getCurrenciesReducer,
        contactBusReducer,
        passengersBusReducer,
        itineraryBusReducer,
        pricingBusReducer,
        pricingBusAnalysisReducer,
        contactAirReducer,
        passengersAirReducer,
        pricingAirReducer,
        pricingAirAnalysisReducer,
        contactMasterReducer,
        passengersMasterReducer,
        pricingMasterReducer,
        pricingMasterAnalysisReducer,
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

            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
