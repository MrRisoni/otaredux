import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import DefaultLayout from './DefaultLayout';


import './main.scss';

import MasterApp from './components/Master/MasterApp';


import DataContextProvider from './components/Master/DataContext';


ReactDOM.render(
    <DataContextProvider>
    <MasterApp />
    </DataContextProvider>, document.getElementById('root'));

registerServiceWorker();
