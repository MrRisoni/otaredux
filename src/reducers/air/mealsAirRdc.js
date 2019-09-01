import * as MasterCons from '../../actions/master/allConstants';

const meals = [
  {
    id: 1,
    key: 'ge534dhfg73567777==',
    price: 15.00,
    segId: 1,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['C', 'F'],
    title: 'Beef wellington',
  },
  {
    id: 2,
    key: 'e5636352ff66==',
    price: 12.00,
    segId: 1,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['C', 'F'],
    title: 'Spaghetti Bolognese',
  },
  {
    id: 3,
    key: 'hdg733747353==',
    price: 20.00,
    segId: 1,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['C', 'F'],
    title: 'Risotto al frutti di mare',
  },
  {
    id: 4,
    key: '62gwreyu4467==',
    price: 20.00,
    segId: 1,
    type: 'Main',
    classes: ['C', 'F'],
    title: 'Beef Stroganov',
  },
  {
    id: 5,
    key: '35567==3434341d',
    price: 8.00,
    segId: 1,
    type: 'Dessert',
    classes: ['C', 'F'],
    title: 'Schwarzwälder Kirschtorte',
  },
  {
    id: 6,
    key: '85hrt35565htrtrg',
    price: 7.00,
    segId: 1,
    type: 'Dessert',
    classes: ['C', 'F'],
    title: 'Chocolate ice-cream',
  },
  {
    id: 7,
    key: 'ge534dhfg7356ewewwewe7777==',
    price: 5.00,
    segId: 1,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['W', 'Y'],
    title: 'Vegeterian',
  },
  {
    id: 8,
    key: 'ge534dhfg7356ewsdsdsdswewe7777==',
    price: 5.00,
    segId: 1,
    type: 'Main',
    classes: ['W', 'Y'],
    title: 'Vegan',
  },
  {
    id: 9,
    key: 'ge534dhfg7356ffdfddfdewsdsdsdswewe7777==',
    price: 5.00,
    segId: 1,
    type: 'Main',
    classes: ['W', 'Y'],
    title: 'Muslim',
  },
    {
        id: 10,
        key: 'ge534dhfg7356ewsdsdsdswewe7777==',
        price: 5.00,
        segId: 2,
        type: 'Main',
        classes: ['W', 'Y'],
        title: 'Vegan',
    },
    {
        id: 11,
        key: 'ge534dhfg7356ffdfddfdewsdsdsdswewe7777==',
        price: 5.00,
        segId: 2,
        type: 'Main',
        classes: ['W', 'Y'],
        title: 'Muslim',
    },
];

const boughtPaxMeals = [];


export function purchasedMealsReducer(state = boughtPaxMeals, action) {
  switch (action.type) {
    case MasterCons.CHANGE_CABIN:
      return state.filter(ml => ml.paxId !== action.payload.paxId);
    case MasterCons.REMOVE_MEAL:

      return state.filter((ml) => {
        const samePax = ml.paxId === action.payload.paxId;
        const sameSeg = ml.segId === action.payload.segId;
        const sameType = ml.type === action.payload.type;
        const returnSame = samePax && sameSeg && sameType;

        if (returnSame === false) {
          return ml;
        }
      });


    case MasterCons.ADD_MEAL:

      // check if there a meal of that type for this pax
      const filters = state.filter(ml => ((ml.paxId === action.payload.paxId) && (ml.segId === action.payload.segId) && (ml.type === action.payload.type)));

      if (filters.length === 0) {
        return [
          ...state,
          action.payload,
        ];
      }

      return state.map(ml => {
        const samePax = ml.paxId === action.payload.paxId;
        const sameSeg = ml.segId === action.payload.segId;
        const sameType = ml.type === action.payload.type;
        const returnSame = samePax && sameSeg && sameType;

        if (returnSame === false) {
          return ml;
        }
        return {
          ...ml,
          mealId: action.payload.mealId,
        };
      });
    default:
      return state;
  }
}


export function getMealsReducer(state = meals, action) {
  return state;
}
