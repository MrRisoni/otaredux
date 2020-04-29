

export function getParkPricingFinalCostReducer(state = parkingCost, action) {

  if (action.type == MasterCons.UPSALES_CHANGED) {

    let totalParkDaysPriced = 0;

    let priceTheseDays =0;

    let remainingDays  = action.payload.parkingDays;
    let total = 0;
    action.payload.parkingPrices.forEach( prkprc => {
        if (remainingDays >0) {
            if (action.payload.parkingDays > prkprc.upToDays) {
                priceTheseDays = prkprc.upToDays;

                totalParkDaysPriced += priceTheseDays;
            } else {
                priceTheseDays = action.payload.parkingDays - totalParkDaysPriced;
            }

            remainingDays -= priceTheseDays;
            total += priceTheseDays * prkprc.price;
        }
    });

    return total;

  }
  return state;
}
