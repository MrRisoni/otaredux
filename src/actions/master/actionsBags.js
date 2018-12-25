import { upsalesDispatcher } from './dispatcher';

export function addAirBagAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_BAG_AIR,
      payload: {
        paxId: data.paxId,
        bagId: data.bagId,
        legId: data.legId,
      },
    });

    // after bag is bought , dispatch the updated passenger array
    dispatch(upsalesDispatcher(getState, UPSALES_CHANGED));
  };
}


export function removeAirBagAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: REMOVE_BAG_AIR,
      payload: {
        paxId: data.paxId,
        bagId: data.bagId,
        legId: data.legId,
      },
    });

    // after bag is bought , dispatch the updated passenger array
    dispatch(upsalesDispatcher(getState, UPSALES_CHANGED));
  };
}
