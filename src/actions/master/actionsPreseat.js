import { upsalesDispatcher } from './dispatcher';
import * as MasterCons from './allConstants';

export function pickPaxSegForPreseatAction(segId, paxId) {
console.log('type: MasterCons.PICK_PAX_AND_SEG_FOR_PRESEAT,');
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.PICK_PAX_AND_SEG_FOR_PRESEAT,
      payload: {
        segId,
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
