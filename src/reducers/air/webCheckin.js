import * as MasterCons from '../../actions/master/allConstants';

const webCheckinPrice = {
    pricePerPax: 3.50,
};


const chosenWebCheckin = false;

const webCheckinCost = 30;

export function hasWebCheckinReducer(state = chosenWebCheckin, action) {
    switch (action.type) {
        case MasterCons.ADD_WEBCHECKIN:

            return { ...state, state: action.payload };
        default:
            return state;
    }
}


export function webCheckinPriceReducer(state = webCheckinPrice, action) {
    return state;
}

export function getWebCheckinFinalCostReducer(state = webCheckinCost, action) {
    if (action.type == MasterCons.UPSALES_CHANGED) {  
      if (action.payload.hasWebCheckin) { 
          return  getNonInfantPaxes(action.payload.passengers) * action.payload.webCheckinPrice;
  
        //  return { ...state, state: action.payload };
  
      }
    }
    return state;
  }