import React from 'react';

const SideBarPersonUpsale = function (props) {
    return (
        <div key={props.pax.id}>
            <div className="row">
                <div className="col-sm-12">
                    {props.pax.surname} {props.pax.name}
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    {props.description}
                </div>
            </div>
        </div>
    )
};

export default SideBarPersonUpsale;
