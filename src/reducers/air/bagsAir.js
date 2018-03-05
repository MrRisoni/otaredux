import {ADD_PASSENGER_MASTER} from '../../actions/master/actionsMaster';


const bags = [
   ];


const bagAllowance =  [
    {
        id: 1,
        key:'xfRGRTR3445dd',
        weight: '20kg',
        dimensions :'',
        type: 'ADT',
        price: 18.00,
        legId:0,
        priceEuro:18.00
    },
    {
        id: 2,
        key:'xfsfgrdtrtXFS',
        weight: '25kg',
        dimensions :'',
        type: 'ADT',
        price: 25.00,
        legId:0,
        priceEuro:25
    }
];


export function addBagReducer( state = bags, action) {
    return state;
}


export function removeBagReducer( state = bags, action) {
    return state;
}




export function getBagsReducer(state = bagAllowance, action) {
    return state;
}




