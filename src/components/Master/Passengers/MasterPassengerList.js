import React from 'react';
import MasterPassenger from './MasterPassenger';
import { Translate } from 'react-redux-i18n';


const MasterPassengerList = props => (
    <section>

    <div className="busPassengerList">

    <div className="alert alert-primary" role="alert">
      <div className="row">
        <div className="col-3">

            <Translate value="passengers.FillThePassengerData"/>
        </div>

        <div className="col-2 offset-7">
          <button
            className="btn btn-sm btn-dark btn-block btnToggle"
            data-toggle="collapse"
            data-target=".passengerListCollapse"
            aria-expanded="false"
            aria-controls="collapseExample"
          >

                       <Translate value="general.Toggle"/>
          </button>
        </div>

      </div>
    </div>


    {props.passengers.filter(pxItem => (pxItem.active == true)).map(pax => (
      <MasterPassenger
        key={pax.id}
        passenger={pax}
        insurances={props.insurances}
        carrierList={props.carrierList}
        currency={props.currency}
        countryList={props.countryList}
        editPaxHandler={props.editPaxHandler}
        editNameHandler={props.editNameHandler}
        removePaxHandler={props.removePaxHandler}
        selectInsuranceHandler={props.selectInsuranceHandler}
      />))}


    <div className="row addOnePassenger show passengerListCollapse">
      <div className="col-4 offset-4">
        <button className="btn btn-primary btn-success" onClick={props.addPaxHandler}>
            <Translate value="passengers.AddPassenger"/>
        </button>
      </div>
    </div>


  </div>
    </section>
);

export default MasterPassengerList;
