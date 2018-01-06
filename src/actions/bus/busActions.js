export const ADD_BUS_PASSENGER = 'ADD_BUS_PASSENGER';
export const FIRST_LOAD_BUS = 'FIRST_LOAD_BUS';
export const PASSENGER_BUS_ADDED = 'PASSENGER_BUS_ADDED';


export function addBusPassengerAction() {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_BUS_PASSENGER
        });


        dispatch({
            type: PASSENGER_BUS_ADDED,
            payload: {
                passengers: getState().passengersReducer,
            }
        });
    }
}


export function firstLoadBusAction() {
    return (dispatch, getState) => {
        console.log('first load bus action');

        dispatch({
            type: FIRST_LOAD_BUS,
            payload: {
                passengers: getState().passengersReducer
            }
        });


    }
}
