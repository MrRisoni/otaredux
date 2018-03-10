export const ADD_BAG_AIR = 'ADD_BAG_AIR';
export const FETCH_BAGS_ANEW = 'FETCH_BAGS_ANEW';


export function airAirBagAction(data) {
    return { type: ADD_BAG_AIR, payload : {
            paxId : data.paxId,
            bagId: data.bagId,
            legId: data.legId
        }
    }
}


export function updateBagsAction() {
    return (dispatch, getState) => {

        dispatch({
            type: FETCH_BAGS_ANEW,
            payload: {}
        });
    }
}