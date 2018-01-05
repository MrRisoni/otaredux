import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import {Provider} from 'react-redux';


import {bagsReducer} from './reducers/bags';
import {currentCurrencyReducer,getCurrenciesReducer} from './reducers/currencies';
import {passengersReducer} from './reducers/passengers';
import {pricingReducer} from './reducers/pricing';


import './index.css';
import App from './App';


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
                <Route exact path="/" component={App}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
