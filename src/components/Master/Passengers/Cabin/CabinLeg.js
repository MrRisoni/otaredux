import React from 'react';
import CabinSegment from "./CabinSegment";

import {Translate} from 'react-redux-i18n';

const CabinLeg = (props) => {

    return (
        <div className="card cabinLegSelect ">
            <div className="card-header">

            {props.leg === 0 ? (
                <Translate value="Departure"/>
                ) : (
                    <Translate value="Return"/>
                )}
            </div>

            <div className="card-body">
                {props.segs.map( (sg) => {
                    return (
                        <CabinSegment seg={sg} leg={0} pax={props.pax}/>
                    )
                })}


            </div>
        </div>
    )
};

export default CabinLeg;
