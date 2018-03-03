export const ADD_BAG_AIR = 'ADD_BAG_AIR';

export function airAirBag(data) {
    return { type: ADD_BAG_AIR, payload : {
            paxId : data.passengerId,
            bagId: data.bagId
        }
    }
}