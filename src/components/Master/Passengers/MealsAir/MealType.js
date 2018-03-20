import React from 'react';
import MealSelection from "./MealSelection";

const MealType = function (props) {


    return (
        <div className="row">
            <div className="col-md-7">
                <div className="card text-white bg-info mb-3">
                    <div className="card-header">{props.type}</div>
                    <div className="card-body">
                        <p className="card-text">

                           <MealSelection mealData={props.data}
                                          currency={props.currency}/>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealType;
