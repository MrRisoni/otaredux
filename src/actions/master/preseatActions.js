import { upsalesDispatcher } from './dispatcher';


export function changePreSeatSelectPassengerAction(paxId) {
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_PRESEAT_SELECT_PAX,
      payload: {
        paxId,
      },
    });
  };
}
