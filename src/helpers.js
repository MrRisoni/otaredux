
export function calcTotalPrice(payload) {
  let total = 0;
  let ticketPrices = 0;
  let activePaxes = 0;
  const priceAnalysis = [];

  console.log('helpers calcTotalPrice');
  console.log(payload);

  payload.passengers.forEach((pax) => {
    if (pax.active) {
      activePaxes++;
      const cabins = payload.cabinSelection.filter(cab => cab.paxId == pax.id);
      console.log('filter cabin list');
      console.log(cabins);

      cabins.forEach((cb) => {
        payload.segmentCabinPricing.forEach((segs) => {
          if (segs.id == cb.segId) {
            console.log(`segment check ${segs}`);
            console.log(segs);
            console.log('weird filter');
            console.log(`cb.cabin ${cb.cabin}`);
            console.log(`pax.age${pax.type}`);
            const priceForThis = segs.cabinList.filter(pr => (pr.class === cb.cabin) && (pr.age === pax.type))[0].price;
            total += priceForThis;
            ticketPrices += priceForThis;
          }
        });
      });

      const boughtBagIs = payload.boughtBags.filter(bbg => bbg.paxId == pax.id).map(bbg =>  bbg.bagId);


        boughtBagIs.forEach(bbg => {
            payload.bagAllowance.forEach(bal => {
                if (bal.id == bbg) {
                    total += bal.priceEuro;
                }
            })
        })

    } // end if pax active
  });


  if (payload.hasFlexibleTicket.state === true) {
    total += (activePaxes * payload.flexibleTicket.pricePerPax);
  }

  if (payload.hasBlueRibbon.state === true) {
    total += (activePaxes * payload.blueRibbonPrices.pricePerPax);
  }

  return {
    total,
    tickets: ticketPrices,
    analysis: priceAnalysis,
  };
}
