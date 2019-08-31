import { upsalesDispatcher } from './dispatcher';
import * as MasterCons from './allConstants';




export function changeFlexibleTicketAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.ADD_FLEXIBLE_TICKET,
      payload: data,
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}


export function removeFlexibleTicketAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.REMOVE_FLEXIBLE_TICKET,
      payload: data,
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}



export function changeBlueRibbonAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.ADD_BLUE_RIBBON,
      payload: data,
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}

export function removeBlueRibbonAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.REMOVE_BLUE_RIBBON,
      payload: data,
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}



export function changeWebCheckinAction(data) {
    return (dispatch, getState) => {
        dispatch({
            type: MasterCons.ADD_WEBCHECKIN,
            payload: data,
        });

        dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
    };
}

export function removeWebCheckinAction(data) {
  return (dispatch, getState) => {
      dispatch({
          type: MasterCons.REMOVE_WEBCHECKIN,
          payload: data,
      });

      dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}



export function addParkingDayAction(data) {
    return (dispatch, getState) => {
        dispatch({
            type: MasterCons.ADD_PARK_DAYS,
            payload: data,
        });

        dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
    };
}


export function subParkingDayAction(data) {
    return (dispatch, getState) => {
        dispatch({
            type: MasterCons.SUB_PARK_DAYS,
            payload: data,
        });

        dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
    };
}



export function changeFastTrackAction(data) {
    return (dispatch, getState) => {
        dispatch({
            type: MasterCons.ADD_FAST_TRACK,
            payload: data,
        });

        dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
    };
}

export function removeFastTrackAction(data) {
  return (dispatch, getState) => {
      dispatch({
          type: MasterCons.REMOVE_FAST_TRACK,
          payload: data,
      });

      dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}
