import * as MasterCons from '../../actions/master/allConstants';


const loungePrices = [{
  airport: 'ATH',
  pricing: [
    { ptc: 'ADT', perHour: 9 },
    { ptc: 'CNN', perHour: 5 }],
},
{
  airport: 'FRA',
  pricing: [
    { ptc: 'ADT', perHour: 12 },
    { ptc: 'CNN', perHour: 6 }],
},
];




const loungeBooking = [];


export function hasLoungeAccessReducer(state = loungeBooking, action) {
    let size = loungeBooking.length;
    return (size >0);
}


export function loungeBookingsReducer(state = loungeBooking, action) {
    return state;
}


export function loungeAccessPricesReducer(state = loungePrices, action) {
  return state;
}
