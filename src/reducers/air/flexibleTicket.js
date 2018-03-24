import {ADD_FLEXIBLE_TICKET} from '../../actions/master/actionsAir';

const flexibleTicketPrice = {
    pricePerPax: 5.00
};


const chosenFlexibleTicket = false;


export function hasFlexibleTicketReducer(state= chosenFlexibleTicket, action) {
    switch (action.type)
    {
        case ADD_FLEXIBLE_TICKET:
            console.log(ADD_FLEXIBLE_TICKET);
            console.log(action.payload);
            return Object.assign({}, state, {
                state: action.payload
            });
        default:
            return state;
    }

}


export function flexibleTicketReducer(state= flexibleTicketPrice, action) {
    return state;
}

