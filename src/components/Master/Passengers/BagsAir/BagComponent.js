import React from 'react';
import BagLeg from "./BagLeg";

const BagComponent = function (props) {
    return (
        <div> Stateless Component {props.name}

            <BagLeg/>

            <BagLeg/>

        </div>
    )
}

export default BagComponent;
