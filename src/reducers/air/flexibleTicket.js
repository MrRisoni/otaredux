import * as MasterCons from '../../actions/master/allConstants';

const flexibleTicketPrice = {
  pricePerPax: 5.00,
};


const chosenFlexibleTicket = false;

const flexTicketCost = 30;


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


export function getFlexibleTicketFinalCostReducer(state = flexTicketCost, action) {
  if (action.type == MasterCons.UPSALES_CHANGED) {  
    if (action.payload.hasFlexibleTicket) { 
        return  getNonInfantPaxes(action.payload.passengers) * action.payload.flexibleTicket;

      //  return { ...state, state: action.payload };

    }
  }
  return state;
}