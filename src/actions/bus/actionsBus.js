export const ADD_PASSENGER_BUS = 'ADD_PASSENGER_BUS';
export const FIRST_LOAD_BUS = 'FIRST_LOAD_BUS';
export const PASSENGER_ADDED_BUS = 'PASSENGER_ADDED_BUS';


export function addPassengerAction() {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_PASSENGER_BUS
        });

        dispatch({
            type: PASSENGER_ADDED_BUS,
            payload: {
                passengers: getState().passengersBusReducer,
                currency: getState().currentCurrencyReducer
            }
        });
    }
}



export function firstLoadAction() {
    return (dispatch, getState) => {
        console.log('first load action');

        dispatch({
            type: FIRST_LOAD_BUS,
            payload: {
                passengers: getState().passengersBusReducer,
                currency: getState().currentCurrencyReducer
            }
        });
    }
}
