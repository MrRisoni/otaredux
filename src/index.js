import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import OtaContextProvider from './components/OtaContext';
/*


import './main.scss';
*/
import MasterApp from './components/Master/MasterApp';
import UpsalesPage from './components/Master/UpsalesPage';




ReactDOM.render(
    <OtaContextProvider>
    <BrowserRouter>
        <div>
          <DefaultLayout exact path="/" component={() => <MasterApp product="air" />} />
          <DefaultLayout exact path="/upsales" component={() => <UpsalesPage product="air" />} />

        </div>
      </BrowserRouter>
          </OtaContextProvider>, document.getElementById('root'));

registerServiceWorker();
