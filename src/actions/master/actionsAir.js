import {ADD_PASSENGER_MASTER, PASSENGER_ADDED_MASTER} from './actionsMaster';

export const ADD_BAG_AIR = 'ADD_BAG_AIR';
export const REMOVE_BAG_AIR = 'REMOVE_BAG_AIR';

export const CHANGED_BAG_AIR = 'CHANGED_BAG_AIR';


export function airAirBagAction(data) {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_BAG_AIR, payload : {
                paxId : data.paxId,
                bagId: data.bagId,
                legId: data.legId
            }
        });

        // after bag is bought , dispatch the updated passenger array
        dispatch({
            type: CHANGED_BAG_AIR,
            payload: {
                passengers: getState().passengersMasterReducer,
                bagAllowance: getState().getBagsReducer,
                pricesPerPax: getState().pricingMasterAnalysisReducer,
                boughtBags: getState().purchasedBagsReducer
            }
        });
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
        dispatch({
            type: CHANGED_BAG_AIR,
            payload: {
                passengers: getState().passengersMasterReducer,
                bagAllowance: getState().getBagsReducer,
                pricesPerPax: getState().pricingMasterAnalysisReducer,
                boughtBags: getState().purchasedBagsReducer
            }
        });
    }
}

