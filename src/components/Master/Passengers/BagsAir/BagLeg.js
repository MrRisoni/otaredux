import React from 'react';
import BagSelection from "./BagSelection";

const BagLeg = function (props) {
    return (
        <div>
            <BagSelection bagsAir={props.bagsAir}
                          currency={props.currency}
                          paxId={props.paxId}/>
        </div>
    )
}

export default BagLeg;
