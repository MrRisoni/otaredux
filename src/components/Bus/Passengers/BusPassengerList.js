import React from 'react';
import BusPassenger from "./BusPassenger";

const BusPassengerList = function (props) {

    let paxList = [];

   {props.passengers.forEach( (pax) => {
       paxList.push(<BusPassenger passenger={pax}/>)
    })}

    return paxList;

};

export default BusPassengerList;
