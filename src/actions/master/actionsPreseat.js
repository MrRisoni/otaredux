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
