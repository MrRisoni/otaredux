import { upsalesDispatcher } from './dispatcher';
import * as MasterCons from './allConstants';


export function addMealAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.ADD_MEAL,
      payload: {
        paxId: data.paxId,
        mealId: data.mealId,
        legId: data.legId,
      },
    });

    // after bag is bought , dispatch the updated passenger array
    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}
