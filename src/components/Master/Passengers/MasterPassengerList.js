import React from 'react';
import MasterPassenger from './MasterPassenger';
import Preseat from '../Preseat/Preseat';
import FlexibleTicket from './FlexibleTicket';
import BlueRibbon from './BlueRibbon';

const MasterPassengerList = (props) => {

    let paxList = [];
    let activePaxes =0;

    props.passengers.forEach(pax => {
        if (pax.active) {
            activePaxes++;
            paxList.push(<MasterPassenger key={pax.id}
                                       passenger={pax}
                                       product={props.product}
                                       insurances={props.insurances}
                                       bagsAir={props.bagsAir}
                                       purchasedBags={props.purchasedBags}
                                       blueRibbon={props.blueRibbon}
                                       mealOptions={props.mealOptions}
                                       boughtMeals={props.boughtMeals}
                                       segments={props.segments}
                                       currency={props.currency}
                                       editPaxHandler={props.editPaxHandler}
                                       editNameHandler={props.editNameHandler}
                                       removePaxHandler={props.removePaxHandler}
                                       addBagHandler={props.addBagHandler}
                                       removeBagHandler={props.removeBagHandler}
                                       selectInsuranceHandler={props.selectInsuranceHandler}
                                       addMealHandler={props.addMealHandler}  />)
        }
    });


    return (<div className="busPassengerList">

        <div className="alert alert-primary" role="alert">
            <div className="row">
                <div className="col-md-3">
                    Fill in the passenger data
                </div>

                <div className="col-md-2 offset-md-7">
                    <button className="btn btn-sm btn-dark btn-block btnToggle"
                            data-toggle="collapse"
                            data-target={`.passengerListCollapse`} aria-expanded="false"
                            aria-controls="collapseExample">
                        Toggle
                    </button>
                </div>

            </div>
        </div>


        {paxList}


        <div className="row addOnePassenger show passengerListCollapse">
            <div className="col-sm-4 offset-md-4">
                <button className="btn btn-primary btn-success" onClick={props.addPaxHandler}>Add
                    Passenger
                </button>
            </div>
        </div>


        <FlexibleTicket paxes={activePaxes}
                        changeFlexibleTicketHandler={props.changeFlexibleTicketHandler}
                        currency={props.currency}
                        hasFlexibleTicket={props.hasFlexibleTicket}
                        flexibleTicket={props.flexibleTicket}/>



        <BlueRibbon paxes={activePaxes}
                    changeBlueRibbonHandler={props.changeBlueRibbonHandler}
                    currency={props.currency}
                    hasBlueRibbon={props.hasBlueRibbon}
                    blueRibbonPrices={props.blueRibbonPrices}/>

    </div>);

};

export default MasterPassengerList;
