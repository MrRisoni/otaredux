import {ADD_PASSENGER_MASTER, PASSENGER_ADDED_MASTER} from './actionsMaster';
import {upsalesDispatcher} from './dispatcher';


export const ADD_BAG_AIR = 'ADD_BAG_AIR';
export const REMOVE_BAG_AIR = 'REMOVE_BAG_AIR';


export const ADD_MEAL_AIR = 'ADD_MEAL_AIR';

export const UPSALES_CHANGED = 'UPSALES_CHANGED';

export const PURCHASE_INSURANCE_AIR = 'PURCHASE_INSURANCE_AIR';



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


export function addMealAction(data) {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_MEAL_AIR, payload : {
                paxId : data.paxId,
                mealId: data.mealId,
                legId: data.legId
            }
        });

        // after bag is bought , dispatch the updated passenger array
        dispatch(upsalesDispatcher(getState));
    }
}
