import React from 'react';
import CabinSegment from "./CabinSegment";

const CabinLeg = (props) => {
    return (
        <div className="card" cabinLegSelect>
            <div className="card-header">
                Departure
            </div>
            <div className="card-body">
                {props.segs.map( (sg) => {
                    return (
                        <CabinSegment currency={props.currency} seg={sg} leg={0} pax={props.pax}/>
                    )
                })}


            </div>
        </div>
    )
};

export default CabinLeg;
