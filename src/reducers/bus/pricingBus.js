import update from 'immutability-helper';

import {ADD_PASSENGER_BUS,FIRST_LOAD_BUS,
    PASSENGER_ADDED_BUS,
    PASSENGER_REMOVED_BUS,
    CHANGE_PASSENGER_BUS,
    REMOVE_PASSENGER_BUS} from '../../actions/bus/actionsBus';


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
        case PASSENGER_REMOVED_BUS:

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
        case REMOVE_PASSENGER_BUS:

            let typeId = 0;
            switch (action.payload.type) {
                case 'CNN':
                    typeId = 1;
                    break;
                case 'STD':
                    typeId = 2;
                    break;
            }

            var newPaxTypes = [...state];
            newPaxTypes[typeId].count--;
            return newPaxTypes;
        case CHANGE_PASSENGER_BUS:


            let newTypeId = 0;
            let oldTypeId = 0;
            switch (action.payload.oldType) {
                case 'CNN':
                    oldTypeId = 1;
                    break;
                case 'STD':
                    oldTypeId = 2;
                    break;
            }

            switch (action.payload.newType) {
                case 'CNN':
                    newTypeId = 1;
                    break;
                case 'STD':
                    newTypeId = 2;
                    break;
            }

            let changedPaxTypes = [...state];

            console.log('change pax bus before');
            console.log(state);
            console.log(action.payload);
            console.log(newTypeId +  ' ' + oldTypeId);
            changedPaxTypes[newTypeId].count++;
            changedPaxTypes[oldTypeId].count--;
            if ( changedPaxTypes[oldTypeId].count <0 ) {
                changedPaxTypes[oldTypeId].count = 0;
            }
            console.log('change pax bus after');
            console.log(changedPaxTypes);
            return changedPaxTypes;
        default:
            return state;
    }
}