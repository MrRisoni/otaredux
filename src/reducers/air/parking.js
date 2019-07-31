import * as MasterCons from '../../actions/master/allConstants';


const parkingDays = 0;

const parkingPricing = [
  {
    upToDays: 3,
    price: 20,
  },
  {
    upToDays: 7,
    price: 40,
  },
  {
    upToDays: 15,
    price: 80,
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
  return parkingPricing;
}
