import { upsalesDispatcher } from './dispatcher';
import * as MasterCons from './allConstants';


export function addMealAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.ADD_MEAL,
      payload: {
        paxId: data.paxId,
        mealId: data.mealId,
        segId: data.segId,
        type: data.type,
      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}


export function removeMealAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.REMOVE_MEAL,
      payload: {
        paxId: data.paxId,
        mealId: data.mealId,
        segId: data.segId,
        type: data.type,

      },
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}
