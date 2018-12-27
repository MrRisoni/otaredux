import React from 'react';
import MasterPassenger from './MasterPassenger';


const MasterPassengerList = (props) => {

    let paxList = [];


    props.passengers.forEach(pax => {
        if (pax.active) {
            paxList.push(<MasterPassenger key={pax.id}
                                       passenger={pax}
                                       product={props.product}
                                       insurances={props.insurances}
                                       bagsAir={props.bagsAir}
                                       getBagsLimit={props.getBagsLimit}
                                       carrierList={props.carrierList}
                                       purchasedBags={props.purchasedBags}
                                       blueRibbon={props.blueRibbon}
                                       cabinSelection={props.cabinSelection}
                                       boughtMeals={props.boughtMeals}
                                       segments={props.segments}
                                       currency={props.currency}
                                       mealOptions={props.mealOptions}
                                       countryList={props.countryList}
                                       editPaxHandler={props.editPaxHandler}
                                       changePaxCabinClassHandler={props.changePaxCabinClassHandler}
                                       editNameHandler={props.editNameHandler}
                                       removePaxHandler={props.removePaxHandler}
                                       addBagHandler={props.addBagHandler}
                                       removeBagHandler={props.removeBagHandler}
                                       selectInsuranceHandler={props.selectInsuranceHandler}
                                       removeMealHandler={props.removeMealHandler}
                                       addMealHandler={props.addMealHandler} />)
        }
    });


    return (<div className="busPassengerList">

        <div className="alert alert-primary" role="alert">
            <div className="row">
                <div className="col-3">
                    Fill in the passenger data
                </div>

                <div className="col-2 offset-7">
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
            <div className="col-4 offset-4">
                <button className="btn btn-primary btn-success" onClick={props.addPaxHandler}>Add
                    Passenger
                </button>
            </div>
        </div>




    </div>);

};

export default MasterPassengerList;
