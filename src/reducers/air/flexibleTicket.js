import * as MasterCons from '../../actions/master/allConstants';
import {getNonInfantPaxes} from '../../helpers';

const flexibleTicketPrice = {
  pricePerPax: 5.00,
};


const chosenFlexibleTicket = false;


const overallFlexTicketCost = 0;

const purchaseCostFlexTicket = flexibleTicketPrice.pricePerPax; 


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


export function flexibleTicketPricingModelReducer(state = flexibleTicketPrice, action) {
  return state;
}



export function getPurchaseCostFlexTicketReducer(state = purchaseCostFlexTicket, action) {
  if (action.payload !== undefined && action.payload.passengers !== undefined) {
     return getNonInfantPaxes(action.payload.passengers) * action.payload.flexTicketPricingMdl.pricePerPax;      
  }
  else {
      return state;
  }
}


export function getFlexibleTicketFinalCostReducer(state = overallFlexTicketCost, action) {
  if (action.type == MasterCons.UPSALES_CHANGED) {  
    if (action.payload.hasFlexibleTicket) { 
        return  getNonInfantPaxes(action.payload.passengers) * action.payload.flexTicketPricingMdl.pricePerPax;
    }
    else {
      return 0;
    }
  }
  return state;
}