import React from 'react';
import BagSelection from './BagSelection';
import MasterPassenger from "../MasterPassenger";

const BagLeg = (props) => {

    let bagArray = [];
    const legTitle = (props.leg ==0) ? "Departure" : "Return";


    props.bagsAir.forEach( bag => {

        if (props.allowedBags.indexOf(bag.key) > -1) {

            bagArray.push(<BagSelection bagData={bag}
                                        key={bag.key}
                                        legId={props.leg}
                                        currency={props.currency}
                                        purchasedBags={props.purchasedBags}
                                        paxId={props.paxId}
                                        limitBags={props.limitBags}
                                        addBagHandler={props.addBagHandler}
                                        removeBagHandler={props.removeBagHandler}/>);
        }

    });


    return (
        <div className="row">
            <div className="col-12">

                <div className="card">
                    <div className="card-header">
                        {legTitle} (Max {props.limitBags})
                    </div>
                    <div className="card-body">
                        {bagArray}
                    </div>
                </div>
            </div>
        </div>

    )

};

export default BagLeg;

