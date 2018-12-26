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
    title: 'Spagheti Bolognese',
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
];

const boughtPaxMeals = [];


export function purchasedMealsReducer(state = boughtPaxMeals, action) {
  switch (action.type) {
    case MasterCons.REMOVE_MEAL:
          console.log('remove new bag fired');
          console.log(action.payload);

          return state.filter(bag => bag.bagId !== action.payload.bagId);
    case MasterCons.ADD_MEAL:
        console.log('add meal');
        console.log(action.payload)
        // check if there a meal of that type for this pax
      return [
        ...state,
        action.payload,
      ];



    default:
      return state;
  }
}


export function getMealsReducer(state = meals, action) {
  return state;
}
