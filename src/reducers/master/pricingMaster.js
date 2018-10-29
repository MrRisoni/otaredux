import update from 'immutability-helper';

import {
    ADD_PASSENGER_MASTER, FIRST_LOAD_MASTER,
    CHANGE_PASSENGER_MASTER,
    REMOVE_PASSENGER_MASTER, PASSENGER_ARRAY_CHANGED, CHANGE_PASSENGER_AIR_CABIN
} from '../../actions/master/actionsMaster';

import {UPSALES_CHANGED} from '../../actions/master/actionsAir';


const totalPrice = 5;

const paxTypes = [
    {
        type:'ADT',
        cabinClass:'Y',
        ticketPriceEuro: 145,
        fareEuro:0,
        taxEuro:0,
        count:1
    },
    {
        type:'ADT',
        cabinClass:'W',
        ticketPriceEuro: 180,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
    {
        type:'ADT',
        cabinClass:'C',
        ticketPriceEuro: 200,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
    {
        type:'ADT',
        cabinClass:'F',
        ticketPriceEuro: 250,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
    {
        type:'CNN',
        cabinClass:'Y',
        ticketPriceEuro: 10,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
    {
        type:'CNN',
        cabinClass:'W',
        ticketPriceEuro: 40,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
    {
        type:'CNN',
        cabinClass:'C',
        ticketPriceEuro: 50,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
    {
        type:'CNN',
        cabinClass:'F',
        ticketPriceEuro: 55,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
    {
        type:'INF',
        ticketPriceEuro: 5,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
    {
        type:'STD',
        ticketPriceEuro: 5,
        fareEuro:0,
        taxEuro:0,
        count:0
    },
];

export function pricingMasterReducer(state = totalPrice, action) {
    console.log('**pricingReducer**');
    console.log('received action' + action.type);
    let total = 0;

    switch (action.type)
    {
        case FIRST_LOAD_MASTER:
            console.log('first load bus');
            console.log(action.payload);

            action.payload.paxTypes.forEach( px => {
                total += px.count * px.ticketPriceEuro;
            });

            return total;
        case PASSENGER_ARRAY_CHANGED:
        case UPSALES_CHANGED:
            console.log('UPSALES_CHANGED');

            console.log(action.payload);
            // active passengers
            let activePaxes =0;
            action.payload.passengers.forEach( pax => {
                if (pax.active) {
                    activePaxes++;
                    action.payload.boughtBags.forEach( boughtBag => {
                        if (boughtBag.paxId === pax.id) {
                            action.payload.bagAllowance.forEach( bag => {
                                if (bag.id === boughtBag.bagId) {
                                    total += bag.price;
                                }
                            });
                        }
                    });

                    action.payload.boughtInsurances.forEach(boughtIns => {
                        action.payload.insuranceOptions.forEach(insOption => {
                            if ((pax.id === boughtIns.paxId) && (insOption.id === boughtIns.insuranceId)) {
                                total += insOption.price;
                            }
                        });
                    });

                    action.payload.boughtMeals.forEach(boughtMl => {
                        action.payload.mealOptions.forEach(availbMeal => {
                            if ((pax.id == boughtMl.paxId) && (availbMeal.id == boughtMl.mealId)) {
                                total += availbMeal.price;
                            }
                        });
                    });
                }
            });

            if (action.payload.hasFlexibleTicket.state === true) {
                total +=  (activePaxes * action.payload.flexibleTicket.pricePerPax);
            }

            if (action.payload.hasBlueRibbon.state === true) {
                total +=  (activePaxes * action.payload.blueRibbonPrices.pricePerPax);
            }

            console.log(action.payload);
            action.payload.pricesPerPax.forEach( px => {
                total += px.ticketPriceEuro * px.count;
            });
            return total;

        default:
            return state;
    }

}

export function pricingMasterAnalysisReducer(state = paxTypes, action )
{
    switch (action.type)
    {
        case FIRST_LOAD_MASTER:
            return state;
        case ADD_PASSENGER_MASTER:

            let ADTs = paxTypes[0];
            ADTs.count++;
            return update(state, {0: {$set: ADTs}});
        case REMOVE_PASSENGER_MASTER:

            let typeId = 0;
            switch (action.payload.type) {
                case 'CNN':
                    typeId = 1;
                    break;
                case 'STD':
                    typeId = 2;
                    break;
            }

            return state.map( (item, index) => {

                if (index !== typeId) {
                    // This isn't the item we care about - keep it as-is
                    return item;
                }
                else {
                    var oldItem = item;
                    oldItem.count--;
                    if (oldItem.count <0) {
                        oldItem.count =0;
                    }

                    return {
                        ...item,
                        ...oldItem
                    };
                }

            });

        case CHANGE_PASSENGER_AIR_CABIN:

            let newClass = action.payload.newClass;
            let oldClass = action.payload.oldClass;
            let ageGroup = action.payload.paxAge;
            console.log('Reducer CHANGE_PASSENGER_AIR_CABIN');
            console.log(state);
            console.log('foo');
            return state.map( (item, index) => {
                console.log('Examining item ');
                console.log(item);
                if ((item.cabinClass !== oldClass) && (item.type !== ageGroup) ) {
                    // This isn't the item we care about - keep it as-is
                    return item;
                }
                else {
                    if (item.cabinClass === oldClass) {
                        var oldItem = item;
                        oldItem.count--;
                        if (oldItem.count <0) {
                            oldItem.count =0;
                        }

                        return {
                            ...item,
                            ...oldItem
                        };
                    }


                    if (item.cabinClass === newClass) {
                        var newItem = item;
                        newItem.count++;

                        return {
                            ...item,
                            ...newItem
                        }
                    }
                }

            });


        case CHANGE_PASSENGER_MASTER:

            console.log('Reducer CHANGE_PASSENGER_MASTER');
            console.log(action.payload);

            let newTypeId = action.payload.newType;
            let oldTypeId = action.payload.oldType;
            let cabin = action.payload.cabin;

            return state.map( (item, index) => {

                console.log('Loop item');
                console.log(item);
                if ((item.type !== oldTypeId)) {
                    // This isn't the item we care about - keep it as-is
                    return item;
                }

                if ((item.type === oldTypeId) && (item.cabinClass == cabin)) {
                    console.log('matched old ' + item);
                    console.log(item);
                    // Otherwise, this is the one we want - return an updated value
                    var oldItem = item;
                    oldItem.count--;
                    if (oldItem.count <0) {
                        oldItem.count =0;
                    }

                    return {
                        ...item,
                        ...oldItem
                    };
                }

                if ((item.type == newTypeId) && (item.cabinClass == cabin)) {
                    console.log('matched new' + item);
                    console.log(item);
                    // Otherwise, this is the one we want - return an updated value
                    var newItem = item;
                    newItem.count++;

                    return {
                        ...item,
                        ...newItem
                    };
                }
            });


        default:
            return state;
    }
}