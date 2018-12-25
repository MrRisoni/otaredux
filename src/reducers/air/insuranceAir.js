import { ADD_BAG_AIR, PURCHASE_INSURANCE_AIR } from '../../actions/master/actionsAir';


const insurancesAir = [
  {
    id: 0,
    title: 'No insurance',
    priceEuro: 0,
    price: 0,
  },
  {
    id: 1,
    title: 'Globy Classic',
    priceEuro: 15,
    price: 15,
  },
  {
    id: 2,
    title: 'Globy Cancellation',
    priceEuro: 22,
    price: 22,
  },
  {
    id: 3,
    title: 'Globy Schengen',
    priceEuro: 35,
    price: 35,
  },
];


const boughtInsurances = [];


export function purchasedInsuranceReducer(state = boughtInsurances, action) {
  switch (action.type) {
    case PURCHASE_INSURANCE_AIR:

      var foundPax = false;

      state.forEach((obj) => {
        if (obj.paxId === obj.paxId) {
          foundPax = true;
        }
      });
      if (foundPax === false) {
        return [
          ...state,
          action.payload,
        ];
      }

      state.map((obj) => {
        if (obj.paxId === obj.paxId) {
          const newItem = obj;
          newItem.insuranceId = action.payload.insuranceId;

          return {
            ...obj,
            ...newItem,
          };
        }
        return obj;
      });


    default:
      return state;
  }
}

export function airInsuranceReducer(state = insurancesAir, action) {
  return state;
}
