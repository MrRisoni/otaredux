import React from 'react';
import BagSelection from "./BagSelection";

const BagLeg = function (props) {

    let bagArray = [];

    props.bagsAir.forEach((bag) => {

        bagArray.push(<BagSelection bagData={bag}
                                    currency={props.currency}
                                    purchasedBags={props.purchasedBags}
                                    paxId={props.paxId}/>);

    });

    return (
        <div>{bagArray}</div>
    )

};

export default BagLeg;
