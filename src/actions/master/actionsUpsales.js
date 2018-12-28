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


export function changeBlueRibbonAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.ADD_BLUE_RIBBON,
      payload: data,
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}
