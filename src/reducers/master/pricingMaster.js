import update from 'immutability-helper';

import * as MasterCons from '../../actions/master/allConstants';


import {UPSALES_CHANGED} from '../../actions/master/actionsAir';


const totalPrice = 5;


const segmentPrices = [
    {
        segId: 0, legId: 0, prices: [
            {cabins: ['Y', 'W', 'C', 'F'], ages: ['ADT', 'CNN', 'INF'], priceEuro: 16},
        ]
    },
    {
        segId: 1, legId: 0, prices: [
            {cabins: ['Y', 'W', 'C', 'F'], ages: ['ADT', 'CNN', 'INF'], priceEuro: 26},
        ]
    },
    {
        segId: 2, legId: 1, prices: [
            {cabins: ['Y', 'W', 'C', 'F'], ages: ['ADT', 'CNN', 'INF'], priceEuro: 16},
        ]
    }
]


export function getSegmentCabinPricing(state = segmentPrices) {
    return state;
}
export function pricingMasterReducer(state = totalPrice, action) {
    console.log('**pricingReducer**');
    console.log('received action' + action.type);
    let total = 0;

    switch (action.type)
    {
        case MasterCons.FIRST_LOAD_MASTER:

            action.payload.passengers.forEach(pax => {
                if (pax.active) {
                     const cabins = action.payload.cabinSelection.filter(cab => cab.paxId == pax.id)[0].cabinList;
                     console.log('filter cabin list');
                     console.log(cabins);
                     cabins.forEach( cb => {
                            action.payload.segmentCabinPricing.forEach( segs => {
                                 if (segs.segId == cb.segId) {
                                     console.log('segment check ' + segs);
                                     console.log(segs);
                                    console.log('weird filter');
                                     console.log('cb.cabin ' + cb.cabin);
                                     console.log('pax.age' + pax.type);

                                     console.log(segs.prices.filter(pr => (pr.cabins.indexOf(cb.cabin) > -1 ) &&  (pr.ages.indexOf(pax.type) > -1)));
                                     total += segs.prices.filter(pr => (pr.cabins.indexOf(cb.cabin) > -1 ) &&  (pr.ages.indexOf(pax.type) > -1))[0].priceEuro;
                            }
                            })
                     })
                }
            });

            return total;
        case MasterCons.PASSENGER_ARRAY_CHANGED:
        case UPSALES_CHANGED:

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
        case MasterCons.FIRST_LOAD_MASTER:
            return state;
        case MasterCons.ADD_PASSENGER_MASTER:

            let ADTs = paxTypes[0];
            ADTs.count++;
            return update(state, {0: {$set: ADTs}});
        case MasterCons.REMOVE_PASSENGER_MASTER:

            let typeId = 0;
            switch (action.payload.type) {
                case 'CNN':
                    typeId = 1;
                    break;
                case 'STD':
                    typeId = 2;
                    break;
            }
            var countPerPaxType = { ADT:0,CNN:0,INF:0};
            var totals =0;
            state.forEach( (item, index) => {
                const loopItemType = item.type;
                if (item.count>0) {
                    totals++;
                    countPerPaxType[loopItemType]++;
                }
            });
            totals--;
            if (totals>0) {

                console.log('REMOVE_PASSENGER_MASTER');
                console.log(countPerPaxType);

                return state.map((item, index) => {

                    if (index !== typeId) {
                        // This isn't the item we care about - keep it as-is
                        return item;
                    }
                    else {
                        var oldItem = item;
                        oldItem.count--;
                        if (oldItem.count < 0) {
                            oldItem.count = 0;
                        }

                        return {
                            ...item,
                            ...oldItem
                        };
                    }

                });
            }
            return state;

        case MasterCons.CHANGE_PASSENGER_AIR_CABIN:

            let newClass = action.payload.newClass;
            let oldClass = action.payload.oldClass;
            let ageGroup = action.payload.paxAge;
            console.log('Reducer CHANGE_PASSENGER_AIR_CABIN');

            console.log(newClass + ' ' + oldClass + ' ' + ageGroup);

            return state.map( (item, index) => {



                var returnSame = true;


                if ((item.cabinClass === oldClass) && (item.type === ageGroup)) {
                    returnSame = false;
                }

                if ((item.cabinClass === newClass) && (item.type === ageGroup)) {
                    returnSame = false;
                }


                if (returnSame === true) {
                    // This isn't the item we care about - keep it as-is//
                   /* console.log('Retaining ');
                    console.log(newClass + ' ' + oldClass + ' ' + ageGroup);
                    console.log(item);*/
                    return item;
                }


                if ((item.cabinClass === oldClass) && (item.type === ageGroup)) {
                    var oldItem = item;
                    oldItem.count--;
                    if (oldItem.count < 0) {
                        oldItem.count = 0;
                    }

                    return {
                        ...item,
                        ...oldItem
                    };
                }

                if ((item.cabinClass === newClass) && (item.type === ageGroup)) {
                    var newItem = item;
                    newItem.count++;

                    return {
                        ...item,
                        ...newItem
                    }
                }


            });


        case MasterCons.CHANGE_PASSENGER_MASTER:

            console.log('Reducer CHANGE_PASSENGER_MASTER');
          //  console.log(action.payload);

            let newTypeId = action.payload.newType;
            let oldTypeId = action.payload.oldType;
            let cabin = action.payload.cabin;

            console.log(cabin  + ' ' + oldTypeId + ' ' + newTypeId);

            return state.map( (item, index) => {

                console.log('Loop item');
                console.log(item);

                var returnSame = false;

                if ((item.type !== oldTypeId) && (item.type !== newTypeId)) {
                    returnSame = true;
                }

                if ((item.type === newTypeId) && (item.cabinClass !== cabin)) {
                    returnSame = true;
                }

                if ((item.type === oldTypeId) && (item.cabinClass !== cabin)) {
                    returnSame = true;
                }

                if (returnSame === true) {
                    // This isn't the item we care about - keep it as-is
                    return item;
                }

                if ((item.type === oldTypeId) && (item.cabinClass === cabin)) {
                    console.log('matched old ' + item);
                    // Otherwise, this is the one we want - return an updated value
                    var oldItem = item;
                    oldItem.count--;
                    if (oldItem.count < 0) {
                        oldItem.count = 0;
                    }

                    return {
                        ...item,
                        ...oldItem
                    };
                }

                if ((item.type === newTypeId) && (item.cabinClass === cabin)) {
                        console.log('matched new' + item);
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
