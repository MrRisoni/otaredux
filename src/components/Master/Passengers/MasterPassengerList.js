import React from 'react';
import MasterPassenger from './MasterPassenger';
import Preseat from "../Preseat/Preseat";

const MasterPassengerList = (props) => {

    let paxList = [];

    {
        props.passengers.forEach((pax) => {
            if (pax.active) {
                paxList.push(<MasterPassenger key={pax.id}
                                           passenger={pax}
                                           product={props.product}
                                           insurances={props.insurances}
                                           bagsAir={props.bagsAir}
                                           purchasedBags={props.purchasedBags}
                                           blueRibbon={props.blueRibbon}
                                           mealOptions={props.mealOptions}
                                           boughtMeals={props.boughtMeals}
                                           currency={props.currency}
                                           editPaxHandler={props.editPaxHandler}
                                           editNameHandler={props.editNameHandler}
                                           removePaxHandler={props.removePaxHandler}
                                           addBagHandler={props.addBagHandler}
                                           removeBagHandler={props.removeBagHandler}
                                           selectInsuranceHandler={props.selectInsuranceHandler}
                                           addMealHandler={props.addMealHandler}  />)
            }
        })
    }

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

        <Preseat/>
    </div>);

};

export default MasterPassengerList;
