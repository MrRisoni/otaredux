import * as MasterCons from '../../actions/master/allConstants';
import {getNonInfantPaxes} from '../../helpers';

const blueRibbonPrices = {
  pricePerPax: 6.00,
  priceEuroPerPax: 6.00,
};


const chosenBlueRibbon = false;


const overallBlueRibbonCost = 0; //after selection

const purchaseCostBlueRibbon = blueRibbonPrices.pricePerPax; // cost of purchase


export function hasBlueRibbonReducer(state = chosenBlueRibbon, action) {
  switch (action.type) {
    case MasterCons.ADD_BLUE_RIBBON:
      return true;
    case MasterCons.REMOVE_BLUE_RIBBON:
      return false;
    default:
      return state;
  }
}

export function BlueRibbonPricingModelReducer(state = blueRibbonPrices){
  return state;
}


export function getPurchaseCostBlueRibbonReducer(state = purchaseCostBlueRibbon, action) {
  if (action.payload !== undefined && action.payload.passengers !== undefined) {
     return getNonInfantPaxes(action.payload.passengers) * action.payload.BlueRibbonPricingMdl.pricePerPax;      
  }
  else {
      return state;
  }
}



export function getBlueRibbonFinalCostReducer(state = overallBlueRibbonCost, action) {
  if (action.type == MasterCons.UPSALES_CHANGED) {  
    if (action.payload.hasBlueRibbon) { 
        return  getNonInfantPaxes(action.payload.passengers) * action.payload.BlueRibbonPricingMdl.pricePerPax;

    }
    else {
      return 0;
  }
  }
  return state;
}