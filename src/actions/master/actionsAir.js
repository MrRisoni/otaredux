export const ADD_BAG_AIR = 'ADD_BAG_AIR';
export const REMOVE_BAG_AIR = 'REMOVE_BAG_AIR';


export function airAirBagAction(data) {
    return { type: ADD_BAG_AIR, payload : {
            paxId : data.paxId,
            bagId: data.bagId,
            legId: data.legId
        }
    }
}

export function removeAirBagAction(data) {
    return { type: REMOVE_BAG_AIR, payload : {
            paxId : data.paxId,
            bagId: data.bagId,
            legId: data.legId
        }
    }
}

