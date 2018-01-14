import React from 'react';
import BusPassenger from './BusPassenger';

const BusPassengerList = (props) => {

    let paxList = [];

    {
        props.passengers.forEach((pax) => {
            if (pax.active) {
                paxList.push(<BusPassenger key={pax.id}
                                           passenger={pax}
                                           removePaxHandler={props.removePaxHandler}/>)
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
    </div>);

};

export default BusPassengerList;
