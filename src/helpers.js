export function fillRange(start, end) {
  return Array(end - start + 1).fill().map((item, index) => start + index);
}

export function seatCost(args) {
    const cabinForThisSeg = args.cabins.filter(cb => ((cb.segId == args.segId) && (cb.paxId == args.paxId)))[0].cabin;
    const seatPrice = args.seatInfo.filter(sif => sif.segId == args.segId)[0].prices.filter(pr => pr.class == cabinForThisSeg)[0].price;

    return seatPrice.toFixed(2);

}

export function decideSeatClass()
{
    const seatName = this.props.colName + this.props.rowId;

    let seatNotAllowed = false;
    let seatChosen = false;
    let seatNotAvailable = false;

    const selectedSeg = 1;
    const firstClassUpToRow =22;

    const cabinsOfSelectedPax =[]; //this.props.passengers.filter(px => px.id == this.$store.state.preseat.selectedPaxId)[0].cabinList;
    const cabinForSelectedPaxSegment = 'Y'; // cabinsOfSelectedPax.filter(cb => cb.seg == this.$store.state.preseat.selectedSegment)[0].cabin;

    // check if seat has been reserved by another PNR
    const reservedSeats = []; //this.$store.state.trip.dep[selectedSeg].taken;
    if (reservedSeats.indexOf(seatName) > -1) {
        seatNotAvailable = true;
    }

    /* this.props.passengers.forEach( (px) => {
         if (px.active === true) {
             px.seatList.forEach( (ssl) => {
               //  if (ssl.seg == this.$store.state.preseat.selectedSegment) {
                     if (ssl.seg == 1) {

                         if (ssl.seatNo == seatName) {
                         seatChosen = true;
                     }
                 }
             })
         }
     });*/

    if ((seatNotAvailable == false) && (seatChosen == false)) {

        if ((cabinForSelectedPaxSegment == 'W') || (cabinForSelectedPaxSegment == 'Y')) {
            if (this.props.rowId < firstClassUpToRow) {
                seatNotAllowed = true;
            }
        }

        if ((cabinForSelectedPaxSegment != 'W') && (cabinForSelectedPaxSegment != 'Y')) {
            if (this.props.rowId > firstClassUpToRow) {
                seatNotAllowed = true; // pax is business class , he cannot pick economy
            }
        }
    }

    let seatClassName = "";
    if (seatNotAllowed) {
        seatClassName += " seatNotAllowed ";
    }

    if (seatChosen) {
        seatClassName += " seatChosen ";
    }

    if (seatNotAvailable) {
        seatClassName += " seatNotAvailable ";
    }

    return seatClassName;
}


export function preseatAllowed(args) {
  const seg = args.seg;
  const pax = args.pax;
  const cabin = args.cabin;
  const seatMap = args.seatMap;

  console.log('preseat allowed');
  console.log(args);

  const cabinForThisSeg = cabin.filter(cb => ((cb.segId == seg.id) && (cb.paxId == pax.id)))[0].cabin;
  const filterAllowSegs = seatMap.filter(sgm => ((sgm.segId == seg.id) && sgm.allowedCabins.indexOf(cabinForThisSeg) > -1));
  return (filterAllowSegs.length > 0);
}

export function calcTotalPrice(payload) {
  let total = 0;
  let upsales = 0;
  let ticketPrices = 0;
  let activePaxes = 0;
  const priceAnalysis = [];

  console.log('helpers calcTotalPrice');
  console.log(payload);

  payload.passengers.forEach((pax) => {
    if (pax.active) {
      activePaxes++;
      const cabins = payload.cabinSelection.filter(cab => cab.paxId == pax.id);


      cabins.forEach((cb) => {
        payload.segmentCabinPricing.forEach((segs) => {
          if (segs.id == cb.segId) {
            const priceForThis = segs.cabinList.filter(pr => (pr.class === cb.cabin) && (pr.age === pax.type))[0].price;
            total += priceForThis;
            ticketPrices += priceForThis;
          }
        });
      });

      const boughtBagIs = payload.boughtBags.filter(bbg => bbg.paxId == pax.id).map(bbg => bbg.bagId);


      boughtBagIs.forEach((bbg) => {
        payload.bagAllowance.forEach((bal) => {
          if (bal.id == bbg) {
            total += bal.priceEuro;
            upsales += bal.priceEuro;
          }
        });
      });


      const boughtMealsIds = payload.boughtMeals.filter(ml => ml.paxId == pax.id).map(ml => ml.mealId);
      console.log('boughtMealsIds');
      console.log(boughtMealsIds);

      payload.mealOptions.forEach((ml) => {
        if (boughtMealsIds.indexOf(ml.id) > -1) {
          total += ml.price;
          upsales += ml.price;
        }
      });
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
    upsales,
    tickets: ticketPrices,
    analysis: priceAnalysis,
  };
}
