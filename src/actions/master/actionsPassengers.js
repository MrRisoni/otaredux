import { upsalesDispatcher } from './dispatcher';


import * as MasterCons from './allConstants';


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
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.CHANGE_CABIN,
      payload: {
        paxId,
        newClass,
        segmentId,
      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.PASSENGER_ARRAY_CHANGED));
  };
}


export function changeMasterPassengerAction(paxId, newCode, oldCode) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.CHANGE_PASSENGER_MASTER,
      payload: {
        passengerId: paxId,
        newType: newCode,
        oldType: oldCode,
      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.PASSENGER_ARRAY_CHANGED));

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));

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

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));

  };
}


export function addMasterPassengerAction() {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.ADD_PASSENGER_MASTER,
    });

    dispatch(upsalesDispatcher(getState, MasterCons.PASSENGER_ARRAY_CHANGED));

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));

  };
}
