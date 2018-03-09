import React from 'react';
import BagLeg from "./BagLeg";

const BagComponent = function (props) {

    return (

        <div>

            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-success" role="alert">
                        Purchase Bags!
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-6">
                    <BagLeg key={0} leg={0}
                            bagsAir={props.bagsAir}
                            purchasedBags={props.purchasedBags}
                            currency={props.currency}
                            paxId={props.paxId}/>
                </div>

                <div className="col-md-6">
                    <BagLeg key={1} leg={1}
                            bagsAir={props.bagsAir}
                            purchasedBags={props.purchasedBags}
                            currency={props.currency}
                            paxId={props.paxId}/>
                </div>
            </div>
        </div>
    )
};

export default BagComponent;
