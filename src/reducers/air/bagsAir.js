import {ADD_BAG_AIR, REMOVE_BAG_AIR} from '../../actions/master/actionsAir';

const bagAllowance =  [
    {
        id: 1,
        key:'xfRGRTR3445dd',
        weight: '20kg',
        dimensions :'',
        type: ['ADT','CNN'],
        classes:['W','Y','C','F'],
        price: 18.00,
        priceEuro:18.00
    },
    {
        id: 2,
        key:'xfsfgrdtrtXFSCFGnotY',
        weight: '25kg',
        dimensions :'',
        type: ['ADT','CNN'],
        classes:['W','C','F'],
        price: 25.00,
        priceEuro:25.00
    },
    {
        id: 3,
        key:'xfsfgrdtrtWCFXFS',
        weight: '30kg',
        dimensions :'',
        type: ['ADT'],
        classes:['C','F'],
        price: 35.00,
        priceEuro:35.00
    }
];

const boughtPaxBags = [];


export function purchasedBagsReducer(state= boughtPaxBags, action) {



    switch (action.type) {
        case ADD_BAG_AIR:
            return [
                ...state,
               action.payload
                ];
        case REMOVE_BAG_AIR:

            let bagFound = false;
            let index = -1;

            state.forEach( (bag,idx) => {

                if (bagFound === false ) {
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

            return state.filter( (bag,idx) => idx !== index);

        default:
            return state;
    }
}


export function getBagsReducer(state = bagAllowance, action) {
    return state;
}





