import React from 'react';
import BusCity from "./BusCity";


const BusSegment = function (props) {

    const depPoint = {
        city: props.data.fromCity,
        time:props.data.departTime,
    };

    const arrPoint = {
        city: props.data.toCity,
        time:props.data.arrivalTime,
    };

    const segTitle = (props.data.id ===0) ? 'Departure' : 'Return';

    return (
        <div className="card busSegment">

            <div className="card-header">
                {segTitle}
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <BusCity key={depPoint.city} data={depPoint}/>
                    </div>

                    <div className="col-md-4 offset-md-4">
                        <BusCity key={arrPoint.city} data={arrPoint}/>
                    </div>
                </div>
            </div>

            <div className="card-footer">
                {segTitle}
            </div>
        </div>
    )
};

export default BusSegment;
