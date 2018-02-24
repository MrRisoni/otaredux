import React from 'react';

const BagSelection = function (props) {
    let bagArray = [];
    props.bagsAir.forEach( (bag) => {
        bagArray.push(
            <div className="row">
                <div className="col-md-7">
                    <button className="button btn-primary btn">+
                    </button>
                        {bag.price.toFixed(2)} {bag.weight}
                </div>
            </div>);
    });
    return (
        <div>{bagArray}</div>
    )
};

export default BagSelection;
