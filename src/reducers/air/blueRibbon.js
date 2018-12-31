import * as MasterCons from '../../actions/master/allConstants';


const blueRibbonPrices = {
  pricePerPax: 6.00,
  priceEuroPerPax: 6.00,
};


const chosenBlueRibbon = false;


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
