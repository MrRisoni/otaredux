import * as MasterCons from '../../actions/master/allConstants';
import {getNonInfantPaxes} from '../../helpers';

const flexibleTicketPrice = {
  pricePerPax: 5.00,
};


const chosenFlexibleTicket = false;

const flexTicketCost = 0;


export function hasFlexibleTicketReducer(state = chosenFlexibleTicket, action) {
  switch (action.type) {
    case MasterCons.ADD_FLEXIBLE_TICKET:
      return true;
    case MasterCons.REMOVE_FLEXIBLE_TICKET:
      return false;
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
        return  getNonInfantPaxes(action.payload.passengers) * action.payload.flexibleTicket.pricePerPax;
    }
    else {
      return 0;
    }
  }
  return state;
}