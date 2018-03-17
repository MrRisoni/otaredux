import {ADD_PASSENGER_MASTER, PASSENGER_ADDED_MASTER} from './actionsMaster';

export const ADD_BAG_AIR = 'ADD_BAG_AIR';
export const REMOVE_BAG_AIR = 'REMOVE_BAG_AIR';

export const UPSALES_CHANGED = 'UPSALES_CHANGED';

export const PURCHASE_INSURANCE_AIR = 'PURCHASE_INSURANCE_AIR';


const upsalesDispatcher = function (status) {
    return {
        type: UPSALES_CHANGED,
        payload: {
            passengers: status().passengersMasterReducer,
            bagAllowance: status().getBagsReducer,
            pricesPerPax: status().pricingMasterAnalysisReducer,
            boughtBags: status().purchasedBagsReducer,
            boughtInsurances: status().purchasedInsuranceReducer,
            insuranceOptions: status().airInsuranceReducer
        }
    }
};


export function addAirBagAction(data) {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_BAG_AIR, payload : {
                paxId : data.paxId,
                bagId: data.bagId,
                legId: data.legId
            }
        });

        // after bag is bought , dispatch the updated passenger array
        dispatch(upsalesDispatcher(getState));
    }
}


export function removeAirBagAction(data) {
    return (dispatch, getState) => {

        dispatch({
            type: REMOVE_BAG_AIR, payload : {
                paxId : data.paxId,
                bagId: data.bagId,
                legId: data.legId
            }
        });

        // after bag is bought , dispatch the updated passenger array
        dispatch(upsalesDispatcher(getState));

    }
}



export function changeAirInsuranceAction(data) {
    return (dispatch, getState) => {

        dispatch({
            type: PURCHASE_INSURANCE_AIR, payload : {
                paxId : data.paxId,
                insuranceId: data.insuranceId
            }
        });

        // after bag is bought , dispatch the updated passenger array
        dispatch(upsalesDispatcher(getState));

    }
}