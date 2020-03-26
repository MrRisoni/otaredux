import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import OtaContextProvider from './components/OtaContext';
/*
import DefaultLayout from './DefaultLayout';


import './main.scss';
*/
import MasterApp from './components/Master/MasterApp';




ReactDOM.render(
    <OtaContextProvider>
    <MasterApp />
    </OtaContextProvider>, document.getElementById('root'));

registerServiceWorker();
