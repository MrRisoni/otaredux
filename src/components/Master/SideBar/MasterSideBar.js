import React from 'react';
import SideBarUpsale from './SideBarUpsale';
import SideBarPersonUpsale from './SideBarPersonUpsale';


const MasterSideBar = (props) => {

    let paxPrices = [];
    let activePaxCount =0;

    props.pricing.analysis.forEach( paxType => {
		    if (paxType.count >0) {
		    	paxPrices.push(<div key={paxType} className="row">
                    	<div className="col-sm-12">
                    		{paxType.type} x {paxType.count}  {paxType.ticketPriceEuro.toFixed(2)} {props.currency.code}
                    	</div>
		    		</div>)
		    }
    });




    let bagPrices = [];
    let insurancePrices = [];
    let mealsPrices = [];

    let totalBagCount =0;
    let insuranceCount =0;
    let mealsCount = 0;
    let otherUpsalesCount =0;

    let preSeated = false;

    props.passengers.forEach( pax => {
        if (pax.active) {

            if (pax.seat.letter !== '')
            {
                preSeated = true;
            }

            activePaxCount++;
            props.bagAllowance.forEach( bag => {
                let bagCountId = 0;
                props.purchasedBags.forEach( boughtBag => {
                    if (bag.id === boughtBag.bagId) {
                        if (boughtBag.paxId === pax.id) {
                            bagCountId++;
                        }
                    }
                });
                if (bagCountId > 0) {
                    totalBagCount++;
                    const  bagDescr = (<div>{bagCountId} x {bag.weight} {bag.price.toFixed(2)} {props.currency.code}</div>)

                    bagPrices.push( <SideBarPersonUpsale
                                        pax={pax}
                                        description={bagDescr} />)
                }
            });




            props.boughtInsurances.forEach( boughtIns => {

                props.insuranceOptions.forEach(insOption => {

                    if ((pax.id === boughtIns.paxId) && (insOption.id === boughtIns.insuranceId)) {
                        insuranceCount++;

                        const  insuranceDescr = (<div>  {insOption.title} {insOption.price.toFixed(2)} {props.currency.code}</div>)

                        insurancePrices.push( <SideBarPersonUpsale
                            pax={pax}
                            description={insuranceDescr} />);

                    }
                });
            });

            props.boughtMeals.forEach(boughtMl => {
                props.mealOptions.forEach(availbMeal => {
                    if ((pax.id == boughtMl.paxId) && (availbMeal.id == boughtMl.mealId)) {
                        mealsCount++;

                        mealsPrices.push(
                            <div key={pax.id}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        {pax.surname} {pax.name}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        {availbMeal.title} {availbMeal.price.toFixed(2)} {props.currency.code}
                                    </div>
                                </div>
                            </div>)
                    }
                });
            });

        }
    });

    let bagsDiv = (<div></div>);

    if (totalBagCount > 0) {
        bagsDiv =
            (<SideBarUpsale title="Bags"
                            price={bagPrices}
                            currency={props.currency}
            />);
    }



    let insuranceDiv = (<div></div>);

    if (insuranceCount > 0) {

        insuranceDiv =
            (<SideBarUpsale title="Insurance"
                            price={insurancePrices}
                            currency={props.currency}
            />);
    }



    let mealsDiv = (<div></div>);


    if (mealsCount > 0) {
        mealsDiv = ( <SideBarUpsale title="Meals"
                                    price={mealsPrices}
                                    currency={props.currency}
        />);
    }



    let otherUpsalesDiv = [];

    if (props.hasFlexibleTicket.state === true) {
        const flexiblePrice = (activePaxCount* props.flexibleTicket.pricePerPax).toFixed(2);

        otherUpsalesDiv.push(<SideBarUpsale title="Flexible Ticket"
                                            price={flexiblePrice}
                                            currency={props.currency}
        />);
    }

    if (props.hasBlueRibbon.state === true) {
        const brbPrice = (activePaxCount* props.blueRibbonPrices.pricePerPax).toFixed(2);

        otherUpsalesDiv.push(
            <SideBarUpsale title="Blue Ribbon"
                           price={brbPrice}
                           currency={props.currency}
                            />
            );
    }

    if (preSeated === true) {
        otherUpsalesDiv.push(
            <SideBarUpsale title="Preaseting"
                           price={5}
                currency={props.currency}
            />
        );
    }

    return (
        <div className="pricebox">

            <div className="card bg-info">
                <div className="card-header">
                    <b>Price Analysis </b>
                </div>
                <div className="card-body text-white">

                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Ticket Price</h4>
                            <hr/>
                        </div>
                    </div>

					{paxPrices}
                    {bagsDiv}
                    {insuranceDiv}
                    {mealsDiv}
                    {otherUpsalesDiv}


                </div>


                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-12">

                            <h4> Total Price : {props.pricing.total.toFixed(2)} {props.currency.code} </h4>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default MasterSideBar;


