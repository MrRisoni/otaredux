import React from 'react';
import MealType from "./MealType";

const MealSegment = function (props) {

    let dessertsDiv = (<div></div>);
    if (props.desserts.length >0) {
        dessertsDiv = <MealType type="desserts"
                                data={props.desserts}/>
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-primary" role="alert">
                        {props.segData}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    {dessertsDiv}
                </div>
            </div>
        </div>
    )
};

export default MealSegment;
