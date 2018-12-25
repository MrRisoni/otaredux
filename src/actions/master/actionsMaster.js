import { setLocale } from 'react-redux-i18n';
import { upsalesDispatcher } from './dispatcher';


import * as MasterCons from './allConstants';


export function fetchCountriesAction() {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_COUNTRIES_FINISHED,
      payload: countries,

    });
  };
}


export function editMasterContactAction(contactData) {
  return {
    type: MasterCons.EDIT_CONTACT_PASSENGER_MASTER,
    payload: {
      surname: contactData.surname,
      name: contactData.name,
      gender: contactData.gender,
      prefix: contactData.prefix,
      mobile: contactData.mobile,
      email: contactData.email,
      country: contactData.country,
      city: contactData.city,
      address: contactData.address,
      postcode: contactData.postcode,
    },
  };
}

export function editMasterPassengerNameAction(paxId, surname, name, gender) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.EDIT_NAME_PASSENGER_MASTER,
      payload: {
        passengerId: paxId,
        surname,
        name,
        gender,
      },
    });


    dispatch({
      type: MasterCons.EDITED_NAME_PASSENGER_MASTER,
      payload: {
        passengerId: paxId,
        surname,
        name,
        gender,
        passengers: getState().passengersMasterReducer,
      },
    });
  };
}


export function changeAirCabinClassPassengerAction(paxId, newClass, segmentId) {
  console.log('changeAirCabinClassPassengerAction');
  console.log(`${paxId} ${newClass} ${segmentId}`);

  return (dispatch, getState) => {
    dispatch({
      type: 'CHANGE_AIR_CABIN',
      payload: {
        paxId,
        newClass,
        segId: segmentId,
      },
    });
  };
}


export function changeMasterPassengerAction(paxId, newCode, oldCode, cls) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.CHANGE_PASSENGER_MASTER,
      payload: {
        passengerId: paxId,
        newType: newCode,
        oldType: oldCode,
        cabin: cls,
      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.PASSENGER_ARRAY_CHANGED));
  };
}

export function removeMasterPassengerAction(paxId, paxType) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.REMOVE_PASSENGER_MASTER,
      payload: {
        passengerId: paxId,
        type: paxType,
      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.PASSENGER_ARRAY_CHANGED));
  };
}


export function addMasterPassengerAction() {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.ADD_PASSENGER_MASTER,
    });

    dispatch(upsalesDispatcher(getState, MasterCons.PASSENGER_ARRAY_CHANGED));
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
      type: 'CHANGE_CURRENCY',
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
