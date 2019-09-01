

const currentCurrency = {
  code: 'EUR',
  rate: 1.00,
};

const currencies = [
  {
    code: 'EUR',
    rate: 1.00,
  },
  {
    code: 'USD',
    rate: 1.14,
  },
  {
    code: 'CHF',
    rate: 1.13,
  },
  {
    code: 'RUB',
    rate: 78.09,
  },
  {
    code: 'NOK',
    rate: 0.94,
  },
];

export function getCurrenciesReducer(state = currencies, action) {
  return state;
}


export function currentCurrencyReducer(state = currentCurrency, action) {
  switch (action.type) {
    case 'CHANGE_CURRENCY':


      let newRate = 1.00;
      action.payload.currencies.forEach(cur => {
        if (cur.code === action.payload.newCode) {
          newRate = cur.rate;
        }
      });

      return {
        ...state,
        code: action.payload.newCode,
        rate: newRate,
      };


    default:
      return state;
  }
}
