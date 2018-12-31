import * as MasterCons from '../../actions/master/allConstants';

const flexibleTicketPrice = {
  pricePerPax: 5.00,
};


const chosenFlexibleTicket = false;


export function hasFlexibleTicketReducer(state = chosenFlexibleTicket, action) {
  switch (action.type) {
    case MasterCons.ADD_FLEXIBLE_TICKET:

      return { ...state, state: action.payload };
    default:
      return state;
  }
}


export function flexibleTicketReducer(state = flexibleTicketPrice, action) {
  return state;
}
