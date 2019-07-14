import * as MasterCons from '../../actions/master/allConstants';

const webCheckinPrice = {
    pricePerPax: 3.50,
};


const chosenWebCheckin = false;


export function hasWebCheckinReducer(state = chosenWebCheckin, action) {
    switch (action.type) {
        case MasterCons.ADD_WEBCHECKIN:

            return { ...state, state: action.payload };
        default:
            return state;
    }
}


export function webCheckiReducer(state = webCheckinPrice, action) {
    return state;
}
