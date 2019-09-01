import * as MasterCons from '../../actions/master/allConstants';


const parkingCost = 0;


const parkingDays = 0;

const parkingPricing = [
  {
    upToDays: 3,
    price: 3,
  },
  {
    upToDays: 7,
    price: 7,
  },
  {
    upToDays: 15,
    price: 12,
  },
];


export function getParkingDaysReducer(state = parkingDays, action) {
    switch (action.type) {
        case MasterCons.ADD_PARK_DAYS:
            console.log('adding one hour');
            if (state < 22) {
                return ++state;
            }else {
                return 0;
            }
        case MasterCons.SUB_PARK_DAYS:
            if (state <=1 ) {
                return 0;
            }
            return --state;
        default:
            return state;

    }
  return parkingDays;
}

export function getParkPricingReducer(state = parkingPricing, action) {
  return state;
}


export function getParkPricingFinalCostReducer(state = parkingCost, action) {

  if (action.type == MasterCons.UPSALES_CHANGED) {   

    let totalParkDaysPriced = 0;

    let priceTheseDays =0;

    let remainingDays  = action.payload.parkingDays;
    let total = 0;
    action.payload.parkingPrices.forEach( prkprc => {
        if (remainingDays >0) {
            if (action.payload.parkingDays > prkprc.upToDays) {
                priceTheseDays = prkprc.upToDays;

                totalParkDaysPriced += priceTheseDays;
            } else {
                priceTheseDays = action.payload.parkingDays - totalParkDaysPriced;
            }

            remainingDays -= priceTheseDays;
            total += priceTheseDays * prkprc.price;
        }
    });

    return total;

  }
  return state;
}
