import * as MasterCons from '../../actions/master/allConstants';
import {getNonInfantPaxes} from '../../helpers';

const blueRibbonPrices = {
  pricePerPax: 6.00,
  priceEuroPerPax: 6.00,
};


const chosenBlueRibbon = false;

const blueRibbonCost = 0;


export function hasBlueRibbonReducer(state = chosenBlueRibbon, action) {
  switch (action.type) {
    case MasterCons.ADD_BLUE_RIBBON:

      return { ...state, state: action.payload };
    default:
      return state;
  }
}


export function getBlueRibbonReducer(state = blueRibbonPrices, action) {
  return state;
}


export function getBlueRibbonFinalCostReducer(state = blueRibbonCost, action) {
  if (action.type == MasterCons.UPSALES_CHANGED) {  
    if (action.payload.hasBlueRibbon) { 
        return  getNonInfantPaxes(action.payload.passengers) * action.payload.blueRibbonPrices.pricePerPax;

      //  return { ...state, state: action.payload };

    }
  }
  return state;
}