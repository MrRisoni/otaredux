import React from 'react';

const CabinPerPax = function (props) {
    return (
        <div className="row cabinPaxSelection">
            <div className="col-7"> {props.pax.humanId} {props.pax.gender} {props.pax.surname} {props.pax.name}  </div>

            <div className="col-5">
                <select className="form-control">
                    <option key="" value="">Select Type</option>
                    {props.cabins.map( cabinType => {
                        return (<option key={cabinType.key} value="">{cabinType.title}</option>)
                    })}
                </select>
            </div>

        </div>
    )
};

export default CabinPerPax;
