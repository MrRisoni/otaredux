import React from 'react';
import SideBarUpsale from './SideBarUpsale';
import SideBarPersonUpsale from './SideBarPersonUpsale';



var Translate = require('react-redux-i18n').Translate;

const MasterSideBar = (props) => {

    let paxPrices = [];
    let activePaxCount = 0;

    let bagPrices = [];
    let insurancePrices = [];
    let mealsPrices = [];

    let totalBagCount = 0;
    let insuranceCount = 0;
    let mealsCount = 0;
    let otherUpsalesCount = 0;

    let preSeated = false;

    props.passengers.forEach(pax => {
        if (pax.active) {

            //if (pax.seat.letter !== '') {
            //    preSeated = true;
            // }

            activePaxCount++;
            props.bagAllowance.forEach(bag => {
                let bagCountId = 0;
                props.purchasedBags.forEach(boughtBag => {
                    if (bag.id === boughtBag.bagId) {
                        if (boughtBag.paxId === pax.id) {
                            bagCountId++;
                        }
                    }
                });
                if (bagCountId > 0) {
                    totalBagCount++;
                    const bagDescr = (
                        <div>{bagCountId} x {bag.weight} {bag.price.toFixed(2)} {props.currency.code}</div>)

                    bagPrices.push(<SideBarPersonUpsale
                        pax={pax}
                        description={bagDescr}/>)
                }
            });


            props.boughtInsurances.forEach(boughtIns => {

                props.insuranceOptions.forEach(insOption => {

                    if ((pax.id === boughtIns.paxId) && (insOption.id === boughtIns.insuranceId) && (insOption.id > 0)) {
                        insuranceCount++;

                        const insuranceDescr = (
                            <div>  {insOption.title} {insOption.price.toFixed(2)} {props.currency.code}</div>)

                        insurancePrices.push(<SideBarPersonUpsale
                            pax={pax}
                            description={insuranceDescr}/>);

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
                                    <div className="col-12">
                                        {pax.surname} {pax.name}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
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
        mealsDiv = (<SideBarUpsale title="Meals"
                                   price={mealsPrices}
                                   currency={props.currency}
        />);
    }


    let otherUpsalesDiv = [];

    if (props.hasFlexibleTicket.state === true) {
        const flexiblePrice = (activePaxCount * props.flexibleTicket.pricePerPax).toFixed(2);

        otherUpsalesDiv.push(<SideBarUpsale title="Flexible Ticket"
                                            price={flexiblePrice}
                                            currency={props.currency}
        />);
    }

    if (props.hasBlueRibbon.state === true) {
        const brbPrice = (activePaxCount * props.blueRibbonPrices.pricePerPax).toFixed(2);

        otherUpsalesDiv.push(
            <SideBarUpsale title="Blue Ribbon"
                           price={brbPrice}
                           currency={props.currency}
            />
        );
    }

    if (preSeated === true) {
        otherUpsalesDiv.push(
            <SideBarUpsale title="Preaseating"
                           price={5}
                           currency={props.currency}
            />
        );
    }


    return (

        <div className="pricebox position-fixed ">

            <div className="card bg-info">
                <div className="card-header">
                    <div className="row">

                        <div className="col-8">
                            <h6>Price Analysis</h6>
                        </div>


                        <div className="col-3 offset-col-4">
                            <button className="btn btn-primary btn-sm" data-toggle="collapse"
                                    href="#priceBoxCollapse"
                                    role="button" aria-expanded="false" aria-controls="priceBoxCollapse">
                                Expand
                            </button>
                        </div>


                    </div>
                </div>

                <div className="card-body show text-white" id="priceBoxCollapse">

                    <div className="row">
                        <div className="col-12">
                            <h4>Ticket Price {props.ticketPrices} {props.currency.code} </h4>
                        </div>
                    </div>

                    {bagsDiv}
                    {insuranceDiv}
                    {mealsDiv}
                    {otherUpsalesDiv}


                    <div className="row">
                        <div className="col-12">
                            <h4>Upsales Price {props.pricing.upsales} {props.currency.code} </h4>
                        </div>
                    </div>


                </div>


                <div className="card-footer">
                    <div className="row">
                        <div className="col-12">

                            <h4><Translate value="application.title"/>
                                : {props.pricing.total.toFixed(2)} {props.currency.code} </h4>

                        </div>
                    </div>


                    <div className="row langSelector">
                        <div className="col-8 offset-2">
                            <select className="form-control" id="exampleFormControlSelect2"
                                    onChange={props.changeLanguageHandler}>
                                <option value="en"> Change language
                                </option>
                                {props.langs.map(lang => {
                                    return (<option key={lang.code} value={lang.code}>{lang.title}</option>)
                                })}
                            </select>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">

                            <div className="row selectLang">
                                <div className="col-8 offset-2"><select
                                    className="form-control">
                                    <option value=""> Change currency
                                    </option>
                                    {props.currencyList.map(cur => {
                                        return (<option value={cur.code}>{cur.code}</option>)
                                    })}
                                </select></div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>


    );
};

export default MasterSideBar;


