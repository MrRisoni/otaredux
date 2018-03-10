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
                            legTitle="departure"
                            bagsAir={props.bagsAir}
                            purchasedBags={props.purchasedBags}
                            currency={props.currency}
                            paxId={props.paxId}
                            addBagHandler={props.addBagHandler}
                            removeBagHandler={props.removeBagHandler}/>
                </div>

                <div className="col-md-6">
                    <BagLeg key={1} leg={1}
                            legTitle="return"
                            bagsAir={props.bagsAir}
                            purchasedBags={props.purchasedBags}
                            currency={props.currency}
                            paxId={props.paxId}
                            addBagHandler={props.addBagHandler}
                            removeBagHandler={props.removeBagHandler}/>
                </div>
            </div>
        </div>
    )
};

export default BagComponent;
