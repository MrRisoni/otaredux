import * as MasterCons from '../../actions/master/allConstants';
import {getNonInfantPaxes} from '../../helpers';

const webCheckinPrices = {
    pricePerPax: 3.50,
};


const chosenWebCheckin = false;


const overallWebCheckinCost = 0; //after selection

const purchaseCostWebCheckin = webCheckinPrices.pricePerPax; // cost of purchase

export function hasWebCheckinReducer(state = chosenWebCheckin, action) {
    switch (action.type) {
        case MasterCons.ADD_WEBCHECKIN:
            return true;
        case MasterCons.REMOVE_WEBCHECKIN:
            return false;
        default:
            return state;
    }
}

export function WebCheckinModelReducer(state = webCheckinPrices){
    return state;
  }
  
  
  export function getPurchaseCostWebCheckinReducer(state = purchaseCostWebCheckin, action) {
    if (action.payload !== undefined && action.payload.passengers !== undefined) {
       return getNonInfantPaxes(action.payload.passengers) * action.payload.WebCheckinPricingMdl.pricePerPax;      
    }
    else {
        return state;
    }
  }

  


export function getWebCheckinFinalCostReducer(state = overallWebCheckinCost, action) {
    if (action.type == MasterCons.UPSALES_CHANGED) {  
      if (action.payload.hasWebCheckin) { 
        return getNonInfantPaxes(action.payload.passengers) * action.payload.WebCheckinPricingMdl.pricePerPax;      
    }
      else {
          return 0;
      }
    }
    return state;
  }