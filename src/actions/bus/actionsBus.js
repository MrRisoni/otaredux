export const ADD_PASSENGER_BUS = 'ADD_PASSENGER_BUS';
export const FIRST_LOAD_BUS = 'FIRST_LOAD_BUS';
export const PASSENGER_ADDED_BUS = 'PASSENGER_ADDED_BUS';
export const REMOVE_PASSENGER_BUS = 'REMOVE_PASSENGER_BUS';


export function removeBusPassengerAction(paxId) {
    return (dispatch, getState) => {

        dispatch({
            type: REMOVE_PASSENGER_BUS,
            payload: {
                passengers: getState().passengersBusReducer,
                passengerId: paxId
            }
        });
    }

}

export function addBusPassengerAction() {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_PASSENGER_BUS
        });

        dispatch({
            type: PASSENGER_ADDED_BUS,
            payload: {
                passengers: getState().passengersBusReducer,
                currency: getState().currentCurrencyReducer,
                pricesPerPax: getState().pricingBusAnalysisReducer
            }
        });
    }
}



export function firstLoadBusAction() {
    return (dispatch, getState) => {
        console.log('first load action');

        dispatch({
            type: FIRST_LOAD_BUS,
            payload: {
                paxTypes: getState().pricingBusAnalysisReducer,
                currency: getState().currentCurrencyReducer
            }
        });
    }
}
