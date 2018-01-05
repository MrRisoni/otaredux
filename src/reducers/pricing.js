

const totalPrice = 5;

export function pricingReducer(state = totalPrice, action) {
    console.log('**pricingReducer**');
    console.log('received action' + action.type);
    switch (action.type)
    {
        case 'FIRST_LOAD':
            console.log(action.payload);
            let total = 0;

            action.payload.passengers.forEach( (px) => {
                total += px.ticketPrice;
            });

            return total;
        default:
            return totalPrice;
    }


}