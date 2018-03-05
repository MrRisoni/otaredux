import React from 'react';
import BagLeg from "./BagLeg";

const BagComponent = function (props) {

    return (
        <div className="row">

            <div className="col-md-5">
                <BagLeg key={0} leg={0}
                        bagsAir={props.bagsAir}
                        currency={props.currency}
                        paxId={props.paxId}/>
            </div>

            <div className="col-md-5">
                <BagLeg key={1} leg={1}
                        bagsAir={props.bagsAir}
                        currency={props.currency}
                        paxId={props.paxId}/>
            </div>
        </div>
    )
};

export default BagComponent;
