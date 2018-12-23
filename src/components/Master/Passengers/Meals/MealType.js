import React from 'react';
import MealSelection from "./MealSelection";

const MealType = function (props) {


    return (
        <div className="row">
            <div className="col-7 offset-2">
                <div className="card text-white bg-info mb-3">
                    <div className="card-header">{props.type}</div>
                    <div className="card-body">
                        <p className="card-text">

                           <MealSelection mealData={props.data}
                                          legId={props.legId}
                                          paxData={props.paxData}
                                          paxId={props.paxId}
                                          currency={props.currency}
                                          addMealHandler={props.addMealHandler}/>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealType;
