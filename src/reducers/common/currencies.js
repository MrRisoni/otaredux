

const currentCurrency = {
    code: 'EUR',
    rate: 1.00
};

const currencies = [
    {
        code: 'EUR',
        rate:1.00
    },
    {
        code: 'DKK',
        rate: 7.44
    }
];

export function getCurrenciesReducer(state = currencies, action) {
    return state
}



export function currentCurrencyReducer(state = currentCurrency, action) {
    console.log('currentCurrencyReducer');
    console.log(action.type);
    console.log(action.payload);




    switch (action.type) {
        case 'CHANGE_CURRENCY':


            let newRate = 1.00;
            action.payload.currencies.forEach( cur => {
                if (cur.code === action.payload.newCode) {
                    newRate = cur.rate;
                }
            });

            return Object.assign({}, state, {
                code: action.payload.newCode,
                rate: newRate
            });
        default:
            return state
    }
}

