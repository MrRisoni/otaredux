import React from 'react';
import BagSelection from './BagSelection';

const BagLeg = function (props) {

    let bagArray = [];
    console.log('Props BagLeg');

    console.log(props);
    props.bagsAir.forEach( bag => {

        console.log(bag);
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
            <div className="col-md-12">

                <div className="card">
                    <div className="card-header">
                        {props.legTitle} (Max 2)
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

