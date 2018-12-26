import * as MasterCons from '../../actions/master/allConstants';
import { calcTotalPrice } from '../../helpers';


const upsalePrices =0;

const totalPrice = 5;

const ticketsPrice = 1;

export function ticketPricesReducer(state = ticketsPrice, action) {
  switch (action.type) {
    case MasterCons.FIRST_LOAD_MASTER:
    case MasterCons.PASSENGER_ARRAY_CHANGED:
      const calcTotalRsp = calcTotalPrice(action.payload);
      return calcTotalRsp.tickets;
    default:
      return state;
  }
}


export function pricingUpsalesMasterReducer(state = totalPrice, action) {
    const total = 0;

    switch (action.type) {
        case MasterCons.FIRST_LOAD_MASTER:
        case MasterCons.PASSENGER_ARRAY_CHANGED:
        case MasterCons.UPSALES_CHANGED:
            const calcTotalRsp = calcTotalPrice(action.payload);
            return calcTotalRsp.upsales;
        default:
            return state;
    }
}



export function pricingMasterReducer(state = totalPrice, action) {
  const total = 0;

  switch (action.type) {
    case MasterCons.FIRST_LOAD_MASTER:
    case MasterCons.PASSENGER_ARRAY_CHANGED:
    case MasterCons.UPSALES_CHANGED:

      const calcTotalRsp = calcTotalPrice(action.payload);

      return calcTotalRsp.total;

    default:
      return state;
  }
}

