
export function upsalesDispatcher (status, actionType) {
    return {
        type: actionType,
        payload: {
            passengers: status().passengersMasterReducer,
            bagAllowance: status().getBagsReducer,
            pricesPerPax: status().pricingMasterAnalysisReducer,
            boughtBags: status().purchasedBagsReducer,
            boughtInsurances: status().purchasedInsuranceReducer,
            insuranceOptions: status().airInsuranceReducer,
            mealOptions: status().getMealsReducer,
            boughtMeals: status().purchasedMealsReducer,
            currency: status().currentCurrencyReducer,
            hasFlexibleTicket:status().hasFlexibleTicketReducer,
            flexibleTicket:status().flexibleTicketReducer,
            hasBlueRibbon: status().hasBlueRibbonReducer,
            blueRibbonPrices: status().getBlueRibbonReducer,
            cabinSelection: status().fetchCabinPaxPerSegmentReducer,
            segmentCabinPricing :status().getLegsReducer,
        }
    }
};
