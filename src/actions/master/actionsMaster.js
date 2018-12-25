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

export function changeCurrencyAction(newCode) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.CHANGE_CURRENCY,
      payload: {
        passengers: getState().passengersReducer,
        newCode,
        currencies: getState().getCurrenciesReducer,
      },
    });
  };
}


export function changeLanguageAction(ev) {
  console.log('changeLanguageAction');
  console.log(ev.target.value);

  return (dispatch, getState) => {
    dispatch(setLocale(ev.target.value));
  };
}
