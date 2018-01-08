import React from 'react';
import BusPassenger from "./BusPassenger";

const BusPassengerList = function (props) {

    let paxList = [];

   {props.passengers.forEach( (pax) => {
       paxList.push(<BusPassenger passenger={pax}/>)
    })}

    return (<div className="busPassengerList">
        {paxList}

            <div className="row addOnePassenger">
                <div className="col-sm-4 offset-md-4">
                    <button className="btn btn-primary btn-success" onClick={props.addPaxHandler}>Add
                        Passenger
                    </button>
                </div>
            </div>
    </div>);

};

export default BusPassengerList;
