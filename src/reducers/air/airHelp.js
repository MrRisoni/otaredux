import * as MasterCons from '../../actions/master/allConstants';
import {getNonInfantPaxes} from '../../helpers';

const airHelpPrice = {
    pricePerPax: 3.00,
};


const hasAirHelp = false;

const overallAirHelpCost = 0;

const overallPurchaseCost = airHelpPrice.pricePerPax;

export function hasAirHelpReducer(state = hasAirHelp, action) {
    switch (action.type) {
        case MasterCons.ADD_AIRHELP:
            return true;
        case MasterCons.REMOVE_AIRHELP:
            return false;
        default:
            return state;
    }
}

export function airHelpPricingModelReducer(state = airHelpPrice){
    return state;
}


export function getPurchasedCostAirHelpReducer(state = overallPurchaseCost, action) {
    if (action.payload !== undefined && action.payload.passengers !== undefined) {
        return  getNonInfantPaxes(action.payload.passengers) * action.payload.airHelpPricingMdl.pricePerPax;   
    }
    else {
        return state;
    }

}


export function getAirHelpFinalCostReducer(state = overallAirHelpCost, action) {
    if (action.type == MasterCons.UPSALES_CHANGED) {  
      if (action.payload.hasAirHelp) { 
          return  getNonInfantPaxes(action.payload.passengers) * action.payload.airHelpPricingMdl.pricePerPax;
      }
      else {
          return 0;
      }
    }
    return state;
  }