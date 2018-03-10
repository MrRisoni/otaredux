export const ADD_BAG_AIR = 'ADD_BAG_AIR';


export function airAirBagAction(data) {
    return { type: ADD_BAG_AIR, payload : {
            paxId : data.paxId,
            bagId: data.bagId,
            legId: data.legId
        }
    }
}


