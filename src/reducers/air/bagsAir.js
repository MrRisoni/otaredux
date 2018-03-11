import {ADD_BAG_AIR} from "../../actions/master/actionsAir";

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
        priceEuro:25.00
    }
];

const boughtPaxBags = [];



const blueRibbonPrices = {
    price: 6.00,
    priceEuro:6.00
};

export function buyBagsAnewReducer(state= boughtPaxBags, action) {
    console.log('buy bags anew reducer ' + action.type);
    console.log(action.payload);


    switch (action.type) {
        case ADD_BAG_AIR:
            console.log('try to mutate');
            return [
                ...state,
                {
                    paxId: 2,
                    bagId: 1
                }
                ];



        default:
            return state;
    }
}


export function getBagsReducer(state = bagAllowance, action) {
    return state;
}

export function getBlueRibbonReducer( state = blueRibbonPrices, action) {
    return state;
}



