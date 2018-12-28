import { setLocale } from 'react-redux-i18n';
import { upsalesDispatcher } from './dispatcher';


import * as MasterCons from './allConstants';

const countries = require('../../resources/countries');

export function fetchCountriesAction() {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.FETCH_COUNTRIES_FINISHED,
      payload: countries,

    });
  };
}


export function firstLoadMasterAction() {
  return (dispatch, getState) => {
    dispatch(upsalesDispatcher(getState, MasterCons.FIRST_LOAD_MASTER));
  };
}

export function changeCurrencyAction(ev) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.CHANGE_CURRENCY,
      payload: {
        newCode: ev.target.value,
        currencies: getState().getCurrenciesReducer,
      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}


export function changeLanguageAction(ev) {
  return (dispatch, getState) => {
    dispatch(setLocale(ev.target.value));
  };
}
