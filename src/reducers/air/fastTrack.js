import * as MasterCons from '../../actions/master/allConstants';

const fastTrackPrice = {
    pricePerPax: 8.00,
};


const chosenFastTrack = false;


export function hasFastTrackReducer(state = chosenFastTrack, action) {
    switch (action.type) {
        case MasterCons.ADD_FAST_TRACK:

            return { ...state, state: action.payload };
        default:
            return state;
    }
}


export function fastTrackPriceReducer(state = fastTrackPrice, action) {
    return state;
}
