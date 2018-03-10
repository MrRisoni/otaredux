import {ADD_PASSENGER_MASTER, PASSENGER_ADDED_MASTER} from "./actionsMaster";

export const ADD_BAG_AIR = 'ADD_BAG_AIR';
export const REMOVE_BAG_AIR = 'REMOVE_BAG_AIR';

export const ADDED_BAG_AIR = 'ADDED_BAG_AIR';


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
            type: ADDED_BAG_AIR,
            payload: {
                passengers: getState().passengersMasterReducer,
                bagAllowance: getState().getBagsReducer,
                pricesPerPax: getState().pricingMasterAnalysisReducer
            }
        });
    }
}


export function removeAirBagAction(data) {
    return { type: REMOVE_BAG_AIR, payload : {
            paxId : data.paxId,
            bagId: data.bagId,
            legId: data.legId
        }
    }
}

