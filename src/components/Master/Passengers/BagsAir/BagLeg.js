import React from 'react';
import BagSelection from "./BagSelection";

const BagLeg = function (props) {
    return (
        <div>
            <BagSelection bagsAir={props.bagsAir}/>
        </div>
    )
}

export default BagLeg;
