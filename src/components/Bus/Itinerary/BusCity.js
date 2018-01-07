import React from 'react';

const BusCity = function (props) {
    console.log('Bus City');
    console.log(props);
    return (
        <div className="busCity">
            <div className="row">
                <div className="col-sm-12">{props.data.city}</div>
            </div>
            <div className="row">
                <div className="col-sm-12">{props.data.time}</div>
            </div>
        </div>
    )
};

export default BusCity;
