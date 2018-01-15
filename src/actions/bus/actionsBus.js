export const ADD_PASSENGER_BUS = 'ADD_PASSENGER_BUS';
export const FIRST_LOAD_BUS = 'FIRST_LOAD_BUS';
export const PASSENGER_ADDED_BUS = 'PASSENGER_ADDED_BUS';
export const REMOVE_PASSENGER_BUS = 'REMOVE_PASSENGER_BUS';
export const PASSENGER_REMOVED_BUS = 'PASSENGER_REMOVED_BUS';
export const CHANGE_PASSENGER_BUS = 'CHANGE_PASSENGER_BUS';



export function changeBusPassengerAction(paxId,newCode,oldCode) {
    return (dispatch, getState) => {

        dispatch({
            type: CHANGE_PASSENGER_BUS,
            payload: {
                passengerId: paxId,
                newType: newCode,
                oldType: oldCode

            }
        });

      /*  // after the passenger has been removed
        dispatch({
            type: PASSENGER_REMOVED_BUS,
            payload: {
                pricesPerPax: getState().pricingBusAnalysisReducer
            }
        }); */

    }
}

export function removeBusPassengerAction(paxId) {
    return (dispatch, getState) => {

        dispatch({
            type: REMOVE_PASSENGER_BUS,
            payload: {
                passengerId: paxId,
                type: 'ADT'
            }
        });

        // after the passenger has been removed
        dispatch({
            type: PASSENGER_REMOVED_BUS,
            payload: {
                pricesPerPax: getState().pricingBusAnalysisReducer
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
