import {bagsReducer} from "../reducers/bags";
import {passengersReducer} from "../reducers/passengers";

export const ADD_PASSENGER = 'ADD_PASSENGER';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const FIRST_LOAD = 'FIRST_LOAD';


export function addPassengerAction() {
    return {type: ADD_PASSENGER}
}



export function changeCurrencyAction(newCode) {
    return (dispatch, getState) => {

        dispatch({
            type: 'CHANGE_CURRENCY',
            payload: {
                passengers: getState().passengersReducer,
                newCode :'DKK',
                currencies: getState().getCurrenciesReducer
            }
        });


    }

}






export function firstLoadAction() {
    return (dispatch, getState) => {
        console.log('first load action');
        console.log(getState().bagsReducer); // access entire state

        dispatch({
                type: 'FIRST_LOAD',
                payload: {
                    passengers: getState().passengersReducer,
                    currency: getState().currentCurrencyReducer
                }
            });


    }
}
