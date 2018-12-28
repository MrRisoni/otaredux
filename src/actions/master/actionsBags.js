import { upsalesDispatcher } from './dispatcher';
import * as MasterCons from './allConstants';


export function addAirBagAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.ADD_BAG,
      payload: {
        paxId: data.paxId,
        bagId: data.bagId,
        legId: data.legId,
      },
    });

    // after bag is bought , dispatch the updated passenger array
    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}


export function removeAirBagAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.REMOVE_BAG,
      payload: {
        paxId: data.paxId,
        bagId: data.bagId,
        legId: data.legId,
      },
    });

    // after bag is bought , dispatch the updated passenger array
    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}
