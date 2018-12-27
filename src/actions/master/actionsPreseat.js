import { upsalesDispatcher } from './dispatcher';
import * as MasterCons from './allConstants';


export function changePreSeatSelectPassengerAction(paxId) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.CHANGE_PRESEAT_SELECT_PAX,
      payload: {
        paxId,
      },
    });
  };
}


export function pickSeatAction(seatNo, segId, paxId) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.PICK_SEAT_NO,
      payload: {
        seatNo,
        segId,
        paxId,
      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}


export function resetSeatsAction() {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.RESET_SEATS,
      payload: {
      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}
