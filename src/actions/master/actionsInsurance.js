import { upsalesDispatcher } from './dispatcher';


export function changeAirInsuranceAction(data) {
  return (dispatch, getState) => {
    dispatch({
      type: PURCHASE_INSURANCE_AIR,
      payload: {
        paxId: data.paxId,
        insuranceId: data.insuranceId,
      },
    });

    // after bag is bought , dispatch the updated passenger array
    dispatch(upsalesDispatcher(getState, UPSALES_CHANGED));
  };
}
