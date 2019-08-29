export function fillRange(start, end) {
  return Array(end - start + 1).fill().map((item, index) => start + index);
}

export function seatCost(args) {
  const cabinForThisSeg = args.cabins.filter(cb => ((cb.segId == args.segId) && (cb.paxId == args.paxId)))[0].cabin;
  const seatPrice = args.seatInfo.filter(sif => sif.segId == args.segId)[0].prices.filter(pr => pr.class == cabinForThisSeg)[0].price;

  return seatPrice.toFixed(2);
}


export function preseatAllowed(args) {
  const seg = args.seg;
  const pax = args.pax;
  const cabin = args.cabin;
  const seatMap = args.seatMap;

  if (pax.type !== 'INF') {
    const cabinForThisSeg = cabin.filter(cb => ((cb.segId == seg.id) && (cb.paxId == pax.id)))[0].cabin;
    const filterAllowSegs = seatMap.filter(sgm => ((sgm.segId == seg.id) && sgm.allowedCabins.indexOf(cabinForThisSeg) > -1));
    return (filterAllowSegs.length > 0);
  }

  return false;
}

export function preSeatPrice(selectedSeats, pax, cabins, seatPrices) {
  // preseat begin
  const seletedSeatsInTheseSegs = selectedSeats.filter(ssl => ((ssl.paxId == pax.id) && (ssl.seatNo !== '')))
    .map(slItem => slItem.segId);
  let pricesSeats = 0;
  for (const seatSegmntId of seletedSeatsInTheseSegs) {
    const classCabin = cabins.filter(cb => cb.segId == seatSegmntId)[0].cabin;
    const seatPrice = seatPrices.filter(stpr => stpr.segId == seatSegmntId)[0].prices.filter(prList => prList.class == classCabin)[0].price;

    pricesSeats += seatPrice;
  }

  // preseat end
  return pricesSeats;
}

export function getNonInfantPaxes(psxList)
{
  let activePaxes =0;
  psxList.forEach(pax => {
    if (pax.active && pax.type != 'INF') {
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


  payload.passengers.forEach(pax => {
    if (pax.active) {
      activePaxes++;
      const cabins = payload.cabinSelection.filter(cab => cab.paxId == pax.id);


      cabins.forEach(cb => {
        payload.segmentCabinPricing.forEach(segs => {
          if (segs.id == cb.segId) {
            const priceForThis = segs.cabinList.filter(pr => (pr.class === cb.cabin) && (pr.age === pax.type))[0].price;
            total += priceForThis;
            ticketPrices += priceForThis;
          }
        });
      });

      const hasIns = payload.boughtInsurances.filter(ins => ins.paxId == pax.id);
      hasIns.forEach(insdata => {
        payload.insuranceOptions.forEach(insOpt => {
          if (insOpt.id == insdata.insuranceId) {
            insurancePrice += parseFloat(insOpt.priceEuro) * payload.currency.rate;
          }
        });
      });


      const boughtBagIs = payload.boughtBags.filter(bbg => bbg.paxId == pax.id).map(bbg => bbg.bagId);


      boughtBagIs.forEach(bbg => {
        payload.bagAllowance.forEach(bal => {
          if (bal.id == bbg) {
            total += bal.priceEuro;
            upsales += bal.priceEuro;
          }
        });
      });


      const boughtMealsIds = payload.boughtMeals.filter(ml => ml.paxId == pax.id).map(ml => ml.mealId);
      payload.mealOptions.forEach(ml => {
        if (boughtMealsIds.indexOf(ml.id) > -1) {
          total += ml.price;
          upsales += ml.price;
        }
      });


      const preseatPriceThisPax = preSeatPrice(payload.selectedSeats, pax, cabins, payload.seatPrices);
      totalPreseat += preseatPriceThisPax;
      total += preseatPriceThisPax;
      upsales += preseatPriceThisPax;
    } // end if pax active
  });

  insurancePrice = parseFloat(insurancePrice).toFixed(2);
  upsales += parseFloat(insurancePrice);
  total += parseFloat(insurancePrice);

  if (payload.hasFlexibleTicket.state === true) {
    const flexPrice = (activePaxes * payload.flexibleTicket.pricePerPax);

    total += flexPrice;
    upsales += flexPrice;
  }

  if (payload.hasWebCheckin.state === true) {
    const webCheckPrice = (activePaxes * payload.webCheckinPrice.pricePerPax);

    total += webCheckPrice;
    upsales += webCheckPrice;
  }

  var extraCosts = [payload.overallBlueRibbonCost,payload.overallPricingCost,payload.overallFastTrackCost];

  
  extraCosts.forEach(xtrcst =>  {
   total += xtrcst;
   upsales += xtrcst;
  });

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
    analysis: priceAnalysis,
  };
}
