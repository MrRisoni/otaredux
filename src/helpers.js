export function fillRange(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((item, index) => start + index);
}

export function getNonInfantPaxes(psxList) {
  let activePaxes = 0;
  psxList.forEach(pax => {
    if (pax.active && pax.type != "INF") {
      activePaxes++;
    }
  });
  return activePaxes;
}

export function calcTotalPrice(payload) {
  let total = 0;
  let upsales = 0;
  let ticketPrices = 0;
  let activePaxes = 0;
  const priceAnalysis = [];
  let totalPreseat = 0;
  let insurancePrice = 0;

  console.log(payload);

  payload.passengers.forEach(pax => {
    if (pax.active) {
      activePaxes++;
      const cabins = payload.cabinSelection.filter(cab => cab.paxId == pax.id);

      cabins.forEach(cb => {
        payload.segmentCabinPricing.forEach(segs => {
          if (segs.id == cb.segId) {
            const priceForThis = segs.cabinList.filter(
              pr => pr.class === cb.cabin && pr.age === pax.type
            )[0].price;
            total += priceForThis;
            ticketPrices += priceForThis;
          }
        });
      });

      const hasIns = payload.boughtInsurances.filter(
        ins => ins.paxId == pax.id
      );
      hasIns.forEach(insdata => {
        payload.insuranceOptions.forEach(insOpt => {
          if (insOpt.id == insdata.insuranceId) {
            insurancePrice +=
              parseFloat(insOpt.priceEuro) * payload.currency.rate;
          }
        });
      });

      const boughtBagIs = payload.boughtBags
        .filter(bbg => bbg.paxId == pax.id)
        .map(bbg => bbg.bagId);

      boughtBagIs.forEach(bbg => {
        payload.bagAllowance.forEach(bal => {
          if (bal.id == bbg) {
            total += bal.priceEuro;
            upsales += bal.priceEuro;
          }
        });
      });

      const boughtMealsIds = payload.boughtMeals
        .filter(ml => ml.paxId == pax.id)
        .map(ml => ml.mealId);
      payload.mealOptions.forEach(ml => {
        if (boughtMealsIds.indexOf(ml.id) > -1) {
          total += ml.price;
          upsales += ml.price;
        }
      });

      const preseatPriceThisPax = preSeatPrice(
        payload.selectedSeats,
        pax,
        cabins,
        payload.seatPrices
      );
      totalPreseat += preseatPriceThisPax;
      total += preseatPriceThisPax;
      upsales += preseatPriceThisPax;
    } // end if pax active
  });

  insurancePrice = parseFloat(insurancePrice).toFixed(2);
  upsales += parseFloat(insurancePrice);
  total += parseFloat(insurancePrice);

  var extraCosts = [
    payload.overallWebCheckinCost,
    payload.overallFlexTicketCost,
    payload.overallBlueRibbonCost,
    payload.overallParkingPrice,
    payload.overallFastTrackCost,
    payload.overallAirHelpCost
  ];

  var extraCostsSelected = [
    payload.hasWebCheckin,
    payload.hasFlexibleTicket,
    payload.hasBlueRibbon,
    false,
    payload.hasFastTrack,
    payload.hasAirHelp
  ];

  for (let x = 0; x < extraCosts.length; x++) {
    if (extraCostsSelected[x] == true) {
      total += extraCosts[x];
      upsales += extraCosts[x];
    }
  }

  total *= payload.currency.rate;
  upsales *= payload.currency.rate;
  upsales = upsales.toFixed(2);
  ticketPrices *= payload.currency.rate;
  ticketPrices = ticketPrices.toFixed(2);

  return {
    total,
    upsales,
    totalPreseat,
    tickets: ticketPrices,
    analysis: priceAnalysis
  };
}
