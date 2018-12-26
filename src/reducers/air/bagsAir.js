import * as MasterCons from '../../actions/master/allConstants';

const bagAllowance = [
  {
    id: 1,
    key: 'xfRGRTR3445dd',
    weight: '20kg',
    dimensions: '',
    type: ['ADT', 'CNN'],
    classes: ['W', 'Y', 'C', 'F'],
    price: 18.00,
    priceEuro: 18.00,
  },
  {
    id: 2,
    key: 'xfsfgrdtrtXFSCFGnotY',
    weight: '25kg',
    dimensions: '',
    type: ['ADT', 'CNN'],
    classes: ['W', 'C', 'F'],
    price: 25.00,
    priceEuro: 25.00,
  },
  {
    id: 3,
    key: 'xfsfgrdtrtWCFXFS',
    weight: '40kg',
    dimensions: '',
    type: ['ADT'],
    classes: ['C', 'F'],
    price: 55.00,
    priceEuro: 55.00,
  },
];

// per leg
const limitPerClass = [
  {
    cabin: 'Y',
    limit: 1,
  },
  {
    cabin: 'W',
    limit: 2,
  },
  {
    cabin: 'C',
    limit: 4,
  },
  {
    cabin: 'F',
    limit: 6,
  },
];

const boughtPaxBags = [];
export function getLimitBagReducer(state = limitPerClass, action) {
  return state;
}

export function purchasedBagsReducer(state = boughtPaxBags, action) {
  switch (action.type) {
    case MasterCons.CHANGE_PASSENGER_MASTER:
      // clear all bags for all segments
      return state;
    case MasterCons.CHANGE_CABIN:
      // clear bags for this segment
      return state;
    case MasterCons.ADD_BAG:
      return [
        ...state,
        action.payload,
      ];
    case MasterCons.REMOVE_BAG:

      let bagFound = false;
      let index = -1;

      state.forEach((bag, idx) => {
        if (bagFound === false) {
          if (bag.paxId == action.payload.paxId) {
            if (bag.bagId === action.payload.bagId) {
              if (bag.legId === action.payload.legId) {
                bagFound = true; // just remove one occurence
                index = idx;
              }
            }
          }
        }
      });

      return state.filter((bag, idx) => idx !== index);

    default:
      return state;
  }
}


export function getBagsReducer(state = bagAllowance, action) {
  return state;
}
