import React from 'react';

// for air itinerary
const Airport = props => (
  <div className="col-5">
    <div className="row">
      <div className="col-4">
        {props.iata}
        <br />
        {props.name}
        <br />
        {props.city}
      </div>
      <div className="col-8">
        <b
          className="flightTime"
        >
          {props.flyTime}
        </b>
        {' '}
        <br />
        {props.day}
        {' '}
        <br />
        {props.date}
        {' '}
        <br />
        <p className="gmtDate">{props.flyTimeGMT}</p>
      </div>
    </div>
  </div>
);
export default Airport;
