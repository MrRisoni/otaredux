import {ADD_PASSENGER_BUS,FIRST_LOAD_BUS,PASSENGER_ADDED_BUS} from '../../actions/bus/actionsBus';


const totalPrice = 5;

export function pricingBusReducer(state = totalPrice, action) {
    console.log('**pricingReducer**');
    console.log('received action' + action.type);
    let total = 0;
    switch (action.type)
    {
        case FIRST_LOAD_BUS:
            console.log(action.payload);

            action.payload.passengers.forEach( (px) => {
                total += px.ticketPriceEuro;
            });

            return total;
        case PASSENGER_ADDED_BUS:
            action.payload.passengers.forEach( (px) => {
                total += px.ticketPriceEuro * action.payload.currency.rate;
            });
            return total;
        default:
            return totalPrice;
    }

}