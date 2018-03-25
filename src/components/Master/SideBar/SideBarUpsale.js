import React from 'react';

const SideBarUpsale = function (props) {
    return (
        <div className="row">
            <div className="col-sm-12">
                <hr/>
                <h4>{props.title}</h4>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    Price {props.price} {props.currency.code}
                </div>
            </div>
        </div>
    )
};

export default SideBarUpsale;
