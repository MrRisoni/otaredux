import { upsalesDispatcher } from './dispatcher';


export function addMealAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_MEAL_AIR,
      payload: {
        paxId: data.paxId,
        mealId: data.mealId,
        legId: data.legId,
      },
    });

    // after bag is bought , dispatch the updated passenger array
    dispatch(upsalesDispatcher(getState, UPSALES_CHANGED));
  };
}
