export const ADD_PASSENGER_AIR = 'ADD_PASSENGER_AIR';
export const FIRST_LOAD_AIR = 'FIRST_LOAD_AIR';
export const PASSENGER_ADDED_AIR = 'PASSENGER_ADDED_AIR';
export const REMOVE_PASSENGER_AIR = 'REMOVE_PASSENGER_AIR';
export const PASSENGER_REMOVED_AIR = 'PASSENGER_REMOVED_AIR';
export const CHANGE_PASSENGER_AIR = 'CHANGE_PASSENGER_AIR';
export const EDIT_NAME_PASSENGER_AIR = 'EDIT_NAME_PASSENGER_AIR';
export const EDITED_NAME_PASSENGER_AIR = 'EDITED_NAME_PASSENGER_AIR';
export const EDIT_CONTACT_PASSENGER_AIR = 'EDIT_CONTACT_PASSENGER_AIR';
export const PASSENGER_ARRAY_CHANGED = 'PASSENGER_ARRAY_CHANGED';



export function editAirContactAction(contactData) {
    return { type: EDIT_CONTACT_PASSENGER_AIR, payload : {
            surname: contactData.surname,
            name:  contactData.name,
            gender: contactData.gender,
            prefix: contactData.prefix,
            mobile:contactData.mobile,
            email: contactData.email,
            country:contactData.country,
            city: contactData.city,
            address:contactData.address,
            postcode:contactData.postcode
        }
    }
}

export function editAirPassengerNameAction(paxId, surname, name) {

    console.log('edit bus action ' + paxId + ' ' + surname);
    return (dispatch, getState) => {

        dispatch({
            type: EDIT_NAME_PASSENGER_AIR,
            payload: {
                passengerId: paxId,
                surname: surname,
                name: name
            }
        });


        dispatch({
            type: EDITED_NAME_PASSENGER_AIR,
            payload: {
                passengerId: paxId,
                surname: surname,
                name: name,
                passengers: getState().passengersAirReducer
            }
        });

    }
}


export function changeAirPassengerAction(paxId,newCode,oldCode) {
    return (dispatch, getState) => {

        dispatch({
            type: CHANGE_PASSENGER_AIR,
            payload: {
                passengerId: paxId,
                newType: newCode,
                oldType: oldCode
            }
        });

        // after the passenger has been updated
        dispatch({
            type: PASSENGER_REMOVED_AIR,
            payload: {
                pricesPerPax: getState().pricingAirAnalysisReducer
            }
        });


        dispatch({
            type:PASSENGER_ARRAY_CHANGED,
            payload: {
                passengers: getState().passengersAirReducer
            }
        });

    }
}

export function removeAirPassengerAction(paxId,paxType) {
    return (dispatch, getState) => {

        dispatch({
            type: REMOVE_PASSENGER_AIR,
            payload: {
                passengerId: paxId,
                type: paxType
            }
        });

        // after the passenger has been removed
        dispatch({
            type: PASSENGER_REMOVED_AIR,
            payload: {
                pricesPerPax: getState().pricingAirAnalysisReducer
            }
        });

        dispatch({
            type:PASSENGER_ARRAY_CHANGED,
            payload: {
                passengers: getState().passengersAirReducer
            }
        });

    }
}



export function addAirPassengerAction() {
    return (dispatch, getState) => {

        dispatch({
            type: ADD_PASSENGER_AIR
        });

        dispatch({
            type: PASSENGER_ADDED_AIR,
            payload: {
                passengers: getState().passengersAirReducer,
                currency: getState().currentCurrencyReducer,
                pricesPerPax: getState().pricingAirAnalysisReducer
            }
        });
    }
}



export function firstLoadAirAction() {
    return (dispatch, getState) => {
        console.log('first load action');

        dispatch({
            type: FIRST_LOAD_AIR,
            payload: {
                paxTypes: getState().pricingAirAnalysisReducer,
                currency: getState().currentCurrencyReducer
            }
        });
    }
}


/*
export function changeCurrencyAction(newCode) {
    return (dispatch, getState) => {

        dispatch({
            type: 'CHANGE_CURRENCY',
            payload: {
                passengers: getState().passengersReducer,
                newCode: newCode,
                currencies: getState().getCurrenciesReducer
            }
        });


    }
}
*/
