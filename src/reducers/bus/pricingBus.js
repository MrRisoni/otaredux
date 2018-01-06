import {ADD_PASSENGER_BUS,PASSENGER_BUS_ADDED} from "../../actions/air/airActions";


const totalPrice = 5;

export function pricingReducer(state = totalPrice, action) {
    console.log('**pricingReducer**');
    console.log('received action' + action.type);
    let total = 0;
    switch (action.type)
    {
        case 'FIRST_LOAD':
            console.log(action.payload);

            action.payload.passengers.forEach( (px) => {
                total += px.ticketPriceEuro;
            });

            return total;


        case CHANGE_CURRENCY:
            console.log(action.payload);

            let newRate = 1.00;
            action.payload.currencies.forEach( (cur) => {
                if (cur.code === action.payload.newCode) {
                    newRate = cur.rate;
                }
            });

            action.payload.passengers.forEach( (px) => {
                total += px.ticketPriceEuro *newRate ;
            });

            return total;
        case PASSENGER_ADDED:
            action.payload.passengers.forEach( (px) => {
                total += px.ticketPriceEuro * action.payload.currency.rate;
            });
            return total;
        default:
            return totalPrice;
    }


}