import {upsalesDispatcher} from './dispatcher';


export const ADD_BAG_AIR = 'ADD_BAG_AIR';
export const REMOVE_BAG_AIR = 'REMOVE_BAG_AIR';


export const ADD_MEAL_AIR = 'ADD_MEAL_AIR';

export const UPSALES_CHANGED = 'UPSALES_CHANGED';

export const PURCHASE_INSURANCE_AIR = 'PURCHASE_INSURANCE_AIR';

export const ADD_FLEXIBLE_TICKET = 'ADD_FLEXIBLE_TICKET';


export const ADD_BLUE_RIBBON = 'ADD_BLUE_RIBBON';

export const SELECT_AIR_SEAT = 'SELECT_AIR_SEAT';


export function selectAirSeatAction(data) {
    return (dispatch, getState) => {

        dispatch({
            type: SELECT_AIR_SEAT, payload : {
                paxId : data.paxId,
                letter: data.letter,
                number: data.number
            }
        });

        // after bag is bought , dispatch the updated passenger array
        dispatch(upsalesDispatcher(getState,UPSALES_CHANGED));
    }
}

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
        dispatch(upsalesDispatcher(getState,UPSALES_CHANGED));
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
        dispatch(upsalesDispatcher(getState,UPSALES_CHANGED));

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
        dispatch(upsalesDispatcher(getState,UPSALES_CHANGED));

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
        dispatch(upsalesDispatcher(getState,UPSALES_CHANGED));
    }
}



export function changeFlexibleTicketAction(data) {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_FLEXIBLE_TICKET,
            payload:data
        });

        dispatch(upsalesDispatcher(getState,UPSALES_CHANGED));
    }
}




export function changeBlueRibbonAction(data) {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_BLUE_RIBBON,
            payload:data
        });

        dispatch(upsalesDispatcher(getState,UPSALES_CHANGED));
    }
}
