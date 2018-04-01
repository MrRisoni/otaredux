import React from 'react';

const Airport = function (props) {
    // for air itinerary

    return (
        <div className="col-md-5">
            <div className="row">
                <div className="col-md-4">{props.iata}<br/>
                    {props.name}
                    <br/>
                    {props.city}
                </div>
                <div className="col-md-8"><b
                    className="flightTime">{props.flyTime}</b> <br/>
                    {props.day} <br/>
                    {props.date} <br/>
                    <p className="gmtDate">{props.flyTimeGMT}</p>
                </div>
            </div>
        </div>
    )
};

export default Airport;
