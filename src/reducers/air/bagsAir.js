import {ADD_BAG_AIR,ADDED_BAG_AIR} from '../../actions/master/actionsAir';


const bags = [
    {
        paxId:0,
        bagId:1,
        legId:0
    }
   ];


const bagAllowance =  [
    {
        id: 1,
        key:'xfRGRTR3445dd',
        weight: '20kg',
        dimensions :'',
        type: 'ADT',
        price: 18.00,
        priceEuro:18.00
    },
    {
        id: 2,
        key:'xfsfgrdtrtXFS',
        weight: '25kg',
        dimensions :'',
        type: 'ADT',
        price: 25.00,
        priceEuro:25
    }
];


export function addBagReducer( state = bags, action) {
    console.log('addBagReducer');
    console.log(action.payload);
    console.log(action.type);
    switch (action.type) {
        case ADD_BAG_AIR:
            return [
                ...state,
                {
                    paxId : 0,
                    bagId: 1,
                    legId: 0
                }
            ];
        default:
            return state;
    }
}



export function removeBagReducer( state = bags, action) {
    return state;
}

export function getPurchasedBagsReducer(state = bags, action) {
   return state;
}


export function getBagsReducer(state = bagAllowance, action) {
    return state;
}




