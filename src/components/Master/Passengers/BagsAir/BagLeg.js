import React from 'react';
import BagSelection from "./BagSelection";

const BagLeg = function (props) {

    let bagArray = [];

    props.bagsAir.forEach((bag) => {

        bagArray.push(<BagSelection bagData={bag}
                                    legId={props.leg}
                                    currency={props.currency}
                                    purchasedBags={props.purchasedBags}
                                    paxId={props.paxId}
                                    addBagHandler={props.addBagHandler}
                                    removeBagHandler={props.removeBagHandler}/>);

    });

    return (
        <div>
            {props.legTitle}
        <div>{bagArray}</div>
        </div>
    )

};

export default BagLeg;
