import {ADD_MEAL_AIR} from '../../actions/master/actionsAir';

const meals =  [
    {
        id: 1,
        carrier:'BA',
        price: 15.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Main course',
        title:'Beef wellington'
    },
    {
        id: 2,
        carrier:'BA',
        price: 12.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Main course',
        title:'Spagheti Bolognese'
    },
    {
        id: 3,
        carrier:'BA',
        price: 20.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Main course',
        title:'Risotto al frutti di mare'
    },
    {
        id: 4,
        carrier:'BA',
        price: 20.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Main course',
        title:'Beef Stroganov'
    },
    {
        id: 5,
        carrier:'BA',
        price: 8.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Dessert',
        title:'Schwarzwälder Kirschtorte'
    },
    {
        id: 6,
        carrier:'BA',
        price: 7.00,
        legId:0,
        route:'Athens-Dublin',
        type:'Dessert',
        title:'Chocolate ice-cream'
    }
];

const boughtPaxMeals = [];




export function purchasedMealsReducer(state= boughtPaxMeals, action) {
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




