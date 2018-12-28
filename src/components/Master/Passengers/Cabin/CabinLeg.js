import React from 'react';
import { Translate } from 'react-redux-i18n';
import CabinSegment from './CabinSegment';


const CabinLeg = props => (
  <div key={props.leg} className="card cabinLegSelect ">
    <div className="card-header">

      {props.leg === 0 ? (
        <Translate value="flight.Departure" />
      ) : (
        <Translate value="flight.Return" />
      )}
    </div>

    <div className="card-body">
      {props.segs.map(sg => (
        <CabinSegment seg={sg} leg={0} pax={props.pax} />
      ))}


    </div>
  </div>
);

export default CabinLeg;
