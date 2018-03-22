import {ADD_MEAL_AIR} from '../../actions/master/actionsAir';

const meals =  [
    {
        id: 1,
        carrier:'BA',
        key:'ge534dhfg73567777==',
        price: 15.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Main',
        title:'Beef wellington'
    },
    {
        id: 2,
        carrier:'BA',
        key:'e5636352ff66==',
        price: 12.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Main',
        title:'Spagheti Bolognese'
    },
    {
        id: 3,
        carrier:'BA',
        key:'hdg733747353==',
        price: 20.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Main',
        title:'Risotto al frutti di mare'
    },
    {
        id: 4,
        carrier:'BA',
        key:'62gwreyu4467==',
        price: 20.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Main',
        title:'Beef Stroganov'
    },
    {
        id: 5,
        carrier:'BA',
        key:'35567==3434341d',
        price: 8.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Dessert',
        title:'Schwarzwälder Kirschtorte'
    },
    {
        id: 6,
        carrier:'BA',
        key:'85hrt35565htrtrg',
        price: 7.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Dessert',
        title:'Chocolate ice-cream'
    }
];

const boughtPaxMeals = [];




export function purchasedMealsReducer(state= boughtPaxMeals, action) {
    console.log('purchasedMealsReducer');
    console.log(action);
    switch (action.type) {
        case ADD_MEAL_AIR:
            return [
                ...state,
                action.payload
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




