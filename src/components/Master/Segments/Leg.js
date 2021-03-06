import React from "react";
import Airport from "./Airport";
import Segment from "./Segment";
import ButtonToggle from "../../Common/ButtonToggle";

const Leg = props => {
  const waitDiv =
    props.data.waiting.total > 0 ? (
      <div className="col-4">
        { props.translations.WaitTime} :{props.data.waiting.h}h{props.data.waiting.m}m
      </div>
    ) : (
      <div />
    );

  const legTitle = props.legId ==0 ? props.translations.Departure : props.translations.Return;

  return (
    <div className="Leg legsCollapse show">
      <div className="card  bg-light mb-3 border-primary mb-3">
        <div className="card-header">
          <div className="row">
            <div className="col-4">{legTitle}</div>

            <ButtonToggle
              target={`legCollapse${props.data.legId}`}
              clsName={"offset-6"}
            />
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
              { props.translGeneral.Expand}
              </button>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-4"> {props.translations.Stops} :{props.data.stops}</div>

            <div className="col-4">
              {props.translations.Duration} :{props.data.duration.h}h{props.data.duration.m}m
            </div>

            {waitDiv}
          </div>

          <div className="collapse" id={`segmentsCollapse${props.data.legId}`}>
            {props.data.segments.map((sg, idx) => (
              <Segment key={idx} data={sg} translGeneral={props.translGeneral} translations={props.translations} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leg;
