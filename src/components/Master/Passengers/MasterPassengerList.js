import React from 'react';
import MasterPassenger from './MasterPassenger';


const MasterPassengerList = props => (
  <div className="busPassengerList">

    <div className="alert alert-primary" role="alert">
      <div className="row">
        <div className="col-3">

                    Fill in the passenger data
        </div>

        <div className="col-2 offset-7">
          <button
            className="btn btn-sm btn-dark btn-block btnToggle"
            data-toggle="collapse"
            data-target=".passengerListCollapse"
            aria-expanded="false"
            aria-controls="collapseExample"
          >

                        Toggle
          </button>
        </div>

      </div>
    </div>


    {props.passengers.filter(pxItem => (pxItem.active == true)).map(pax => (
      <MasterPassenger
        key={pax.id}
        passenger={pax}
        insurances={props.insurances}
        bagsAir={props.bagsAir}
        getBagsLimit={props.getBagsLimit}
        carrierList={props.carrierList}
        purchasedBags={props.purchasedBags}
        cabinSelection={props.cabinSelection}
        segments={props.segments}
        currency={props.currency}
        countryList={props.countryList}
        editPaxHandler={props.editPaxHandler}
        changePaxCabinClassHandler={props.changePaxCabinClassHandler}
        editNameHandler={props.editNameHandler}
        removePaxHandler={props.removePaxHandler}
        addBagHandler={props.addBagHandler}
        removeBagHandler={props.removeBagHandler}
        selectInsuranceHandler={props.selectInsuranceHandler}
      />))}


    <div className="row addOnePassenger show passengerListCollapse">
      <div className="col-4 offset-4">
        <button className="btn btn-primary btn-success" onClick={props.addPaxHandler}>
Add   Passenger
        </button>
      </div>
    </div>


  </div>
);

export default MasterPassengerList;
