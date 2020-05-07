import React from 'react';
import Airport from './Airport';
import Segment from './Segment';


const Leg = (props) => {
  const waitDiv = props.data.waiting.total > 0 ? (
    <div className="col-4">
     flight.WaitTime
      {' '}
:
      {props.data.waiting.h}
h
      {props.data.waiting.m}
m
    </div>
  ) : (<div />);


  const legTitle = "flight.Departurepe";

  return (
    <div className="Leg legsCollapse show">
      <div className="card  bg-light mb-3 border-primary mb-3">

        <div className="card-header">
          <div className="row">

            <div className="col-4">{legTitle}</div>


            <div className="col-2 offset-5">
              <button
                className="btn btn-sm btn-dark btn-block btnToggle"
                data-toggle="collapse"
                data-target={`#legCollapse${props.data.legId}`}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                general.Toggle />
              </button>
            </div>
          </div>

        </div>


        <div className="card-body show" id={`legCollapse${props.data.legId}`}>

          <div className="row">


            <Airport
              iata={props.data.from.iata}
              city={props.data.from.city}
              name={props.data.from.name}
              flyTime={props.data.from.flyTime}
              flyTimeGMT={props.data.from.flyTimeGMT}
              day={props.data.from.day}
              date={props.data.from.date}
            />

            <Airport
              iata={props.data.to.iata}
              city={props.data.to.city}
              name={props.data.to.name}
              flyTime={props.data.to.flyTime}
              flyTimeGMT={props.data.to.flyTimeGMT}
              day={props.data.to.day}
              date={props.data.to.date}
            />

            <div className="col-2">
              <button
                className="btn btn-sm btn-primary"
                data-toggle="collapse"
                data-target={`#segmentsCollapse${props.data.legId}`}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                general.Expand

              </button>
            </div>

          </div>


          <br />


          <div className="row">

            <div className="col-4">
              flight.Stops

                            :
              {props.data.stops}
            </div>

            <div className="col-4">
              flight.Duration
              {' '}
:
              {props.data.duration.h}
h
              {props.data.duration.m}
m
            </div>


            {waitDiv}
          </div>

  

          <div className="collapse" id={`segmentsCollapse${props.data.legId}`}>
            {props.data.segments.map((sg, idx) => (<Segment key={idx} data={sg} />))}
          </div>

        </div>

      </div>
    </div>

  );
};

export default Leg;
