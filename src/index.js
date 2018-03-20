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
import {airSegmentsReducer} from './reducers/air/itineraryAir';
import {contactMasterReducer, passengersMasterReducer} from './reducers/master/passengersMaster';
import {pricingMasterReducer, pricingMasterAnalysisReducer} from './reducers/master/pricingMaster';
import {getBagsReducer,getBlueRibbonReducer,purchasedBagsReducer} from './reducers/air/bagsAir';
import {airInsuranceReducer,purchasedInsuranceReducer} from './reducers/air/insuranceAir';
import {getMealsReducer,purchasedMealsReducer} from './reducers/air/mealsAir';



import './index.css';
import MasterApp from './components/Master/MasterApp';

import Home from './components/Common/Home';
import Upsales from './components/Master/Upsales';


let store = createStore(combineReducers({
        currentCurrencyReducer,
        getCurrenciesReducer,
        contactMasterReducer,
        passengersMasterReducer,
        pricingMasterReducer,
        pricingMasterAnalysisReducer,
        airInsuranceReducer,
        getBagsReducer,
        getBlueRibbonReducer,
        purchasedBagsReducer,
        purchasedInsuranceReducer,
        getMealsReducer,
        purchasedMealsReducer,
        airSegmentsReducer,
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
                <Route exact path="/upsales" component={Upsales}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
