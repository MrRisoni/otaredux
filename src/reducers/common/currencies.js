import {CHANGE_CURRENCY} from '../../actions/air/airActions';


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
    switch (action.type) {
        case CHANGE_CURRENCY:
            return {
                code: 'DKK',
                rate: 7.44
            }
        default:
            return state
    }
}

