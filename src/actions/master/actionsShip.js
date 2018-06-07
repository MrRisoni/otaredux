export const SELECT_CABIN = 'SELECT_CABIN';


export function selectCabinAction(paxId,cabinType) {
    return (dispatch, getState) => {

        dispatch({
            type: SELECT_CABIN,
            payload: {
                passengerId: paxId,
                cabinType: cabinType
            }
        });
    }
}
