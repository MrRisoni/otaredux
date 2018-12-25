import { upsalesDispatcher } from './dispatcher';
import * as MasterCons from './allConstants';


export function changeAirInsuranceAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: MasterCons.PURCHASE_INSURANCE,
      payload: {
        paxId: data.paxId,
        insuranceId: data.insuranceId,
      },
    });

    // after bag is bought , dispatch the updated passenger array
    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}
