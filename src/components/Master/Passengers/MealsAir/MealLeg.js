import React from 'react';
import MealSegment from "./MealSegment";

const MealLeg = function (props) {
    let mealSegments = [];

    props.mealOptions.forEach( meal => {

        if (meal.legId === props.leg) {
            mealSegments.push(<MealSegment mealData={meal}
                                           legId={props.leg}
                                           currency={props.currency}
                                           paxId={props.paxId}
                                           addMealHandler={props.addMealHandler}/>);
        }
    });


    return (
        <div className="row">
            <div className="col-md-12">

                <div className="card">
                    <div className="card-header">
                        {props.legTitle}
                    </div>
                    <div className="card-body">
                        {mealSegments}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MealLeg;
