import update from 'immutability-helper';

import {ADD_PASSENGER_BUS,FIRST_LOAD_BUS,PASSENGER_ADDED_BUS} from '../../actions/bus/actionsBus';


const totalPrice = 5;

const paxTypes = [
    {
        type:'ADT',
        ticketPriceEuro: 45,
        count:1
    },
    {
        type:'CNN',
        ticketPriceEuro: 30,
        count:0
    },
    {
        type:'STD',
        ticketPriceEuro: 10,
        count:0
    }
];

export function pricingBusReducer(state = totalPrice, action) {
    console.log('**pricingReducer**');
    console.log('received action' + action.type);
    let total = 0;
    switch (action.type)
    {
        case FIRST_LOAD_BUS:
            console.log('first load bus');
            console.log(action.payload);

            action.payload.paxTypes.forEach( (px) => {
                total += px.count * px.ticketPriceEuro;
            });

            return total;
        case PASSENGER_ADDED_BUS:
            action.payload.pricesPerPax.forEach( (px) => {
                total += px.ticketPriceEuro * px.count;
            });
            return total;
        default:
            return state;
    }

}

export function pricingBusAnalysisReducer(state = paxTypes, action )
{
    switch (action.type)
    {
        case FIRST_LOAD_BUS:
            return state;
        case ADD_PASSENGER_BUS:

            let ADTs = paxTypes[0];
            ADTs.count++;
            return update(state, {0: {$set: ADTs}});

        default:
            return state;
    }
}