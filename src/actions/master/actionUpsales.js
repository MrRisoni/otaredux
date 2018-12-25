import { upsalesDispatcher } from './dispatcher';


export function changeFlexibleTicketAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_FLEXIBLE_TICKET,
      payload: data,
    });

    dispatch(upsalesDispatcher(getState, UPSALES_CHANGED));
  };
}


export function changeBlueRibbonAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_BLUE_RIBBON,
      payload: data,
    });

    dispatch(upsalesDispatcher(getState, UPSALES_CHANGED));
  };
}
