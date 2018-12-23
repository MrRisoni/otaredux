import React from 'react';

const SideBarUpsale = (props) => {
    return (
        <div>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h3>{props.title} </h3>
                </div>
                <div className="col-5">
                    <h6>{props.price} {props.currency.code}</h6>
                </div>
            </div>
        </div>
    )
};

export default SideBarUpsale;
