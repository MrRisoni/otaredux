import {upsalesDispatcher} from './dispatcher';

export const CHANGE_PRESEAT_SELECT_PAX = 'CHANGE_PRESEAT_SELECT_PAX';


export function changePreSeatSelectPassengerAction(paxId) {
    return (dispatch, getState) => {

        dispatch({
            type: CHANGE_PRESEAT_SELECT_PAX,
            payload: {
                paxId: paxId
            }
        });
    }
}
