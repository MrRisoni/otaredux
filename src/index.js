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
import {currentCurrencyReducer,getCurrenciesReducer} from './reducers/common/currencies';
import {passengersReducer} from './reducers/common/passengers';
import {pricingReducer} from './reducers/air/pricingAir';


import './index.css';
import App from './App';
import Home from './components/Common/Home';


let store = createStore(combineReducers({
        bagsReducer,
        currentCurrencyReducer,
        passengersReducer,
        getCurrenciesReducer,
        pricingReducer,
        routing: routerReducer
    }),
    applyMiddleware(thunk),
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/test" component={App}/>
                <Route exact path="/" component={Home}/>

            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
