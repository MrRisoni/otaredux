import { ADD_MEAL_AIR } from '../../actions/master/actionsAir';

const meals = [
  {
    id: 1,
    carrier: 'BA',
    key: 'ge534dhfg73567777==',
    price: 15.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['C', 'F'],
    title: 'Beef wellington',
  },
  {
    id: 2,
    carrier: 'BA',
    key: 'e5636352ff66==',
    price: 12.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['C', 'F'],
    title: 'Spagheti Bolognese',
  },
  {
    id: 3,
    carrier: 'BA',
    key: 'hdg733747353==',
    price: 20.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['C', 'F'],
    title: 'Risotto al frutti di mare',
  },
  {
    id: 4,
    carrier: 'BA',
    key: '62gwreyu4467==',
    price: 20.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['C', 'F'],
    title: 'Beef Stroganov',
  },
  {
    id: 5,
    carrier: 'BA',
    key: '35567==3434341d',
    price: 8.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Dessert',
    classes: ['C', 'F'],
    title: 'Schwarzwälder Kirschtorte',
  },
  {
    id: 6,
    carrier: 'BA',
    key: '85hrt35565htrtrg',
    price: 7.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Dessert',
    classes: ['C', 'F'],
    title: 'Chocolate ice-cream',
  },
  {
    id: 7,
    carrier: 'BA',
    key: 'ge534dhfg7356ewewwewe7777==',
    price: 5.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['W', 'Y'],
    title: 'Vegeterian',
  },
  {
    id: 8,
    carrier: 'BA',
    key: 'ge534dhfg7356ewsdsdsdswewe7777==',
    price: 5.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['W', 'Y'],
    title: 'Vegan',
  },
  {
    id: 9,
    carrier: 'BA',
    key: 'ge534dhfg7356ffdfddfdewsdsdsdswewe7777==',
    price: 5.00,
    legId: 0,
    route: 'Athens-Dublin',
    type: 'Main',
    classes: ['W', 'Y'],
    title: 'Muslim',
  },
];

const boughtPaxMeals = [];


export function purchasedMealsReducer(state = boughtPaxMeals, action) {
  switch (action.type) {
    case ADD_MEAL_AIR:
      return [
        ...state,
        action.payload,
      ];
      /* case REMOVE_BAG_AIR:
            console.log('remove new bag fired');
            console.log(action.payload);

            return state.filter(bag => bag.bagId !== action.payload.bagId);
*/
    default:
      return state;
  }
}


export function getMealsReducer(state = meals, action) {
  return state;
}
