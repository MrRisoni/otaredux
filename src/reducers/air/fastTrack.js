import * as MasterCons from '../../actions/master/allConstants';
import {getNonInfantPaxes} from '../../helpers';

const fastTrackPrice = {
    pricePerPax: 8.00,
};


const chosenFastTrack = false;

const overallFastTrackCost = 0;


export function hasFastTrackReducer(state = chosenFastTrack, action) {
    switch (action.type) {
        case MasterCons.ADD_FAST_TRACK:
            return true;
        case MasterCons.REMOVE_FAST_TRACK:
            return false;
        default:
            return state;
    }
}


export function fastTrackPriceReducer(state = fastTrackPrice, action) {
    return state;
}



export function getFastTrackFinalCostReducer(state = overallFastTrackCost, action) {
    console.log(action.type);

    console.log(action.payload);

    if (action.type == MasterCons.UPSALES_CHANGED) {  
      if (action.payload.hasFastTrack) { 
          return  getNonInfantPaxes(action.payload.passengers) * action.payload.fastTrackPricing.pricePerPax;
      }
      else {
          return 0;
      }
    }
    return state;
  }