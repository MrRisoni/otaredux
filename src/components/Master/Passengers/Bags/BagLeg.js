import React from 'react';
import BagSelection from './BagSelection';
import MasterPassenger from "../MasterPassenger";

const BagLeg = (props) => {

    let bagArray = [];
    const legTitle = (props.leg ==0) ? "Departure" : "Return";

    console.log('bagleg');
    console.log(props);



    props.bagsAir.forEach( bag => {

        if (bag.classes.indexOf(props.paxData.cabinClass) > -1) {

            bagArray.push(<BagSelection bagData={bag}
                                        key={bag.key}
                                        legId={props.leg}
                                        currency={props.currency}
                                        purchasedBags={props.purchasedBags}
                                        paxId={props.paxId}
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

