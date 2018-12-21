import React from 'react';
import MealLeg from './MealLeg';

const MealsComponent = function (props) {

    return (

        <div>
            <div className="row">
                <div className="col-12">
                    <div className="alert alert-success" role="alert">

                        <div className="row">
                            <div className="col-6">
                                Are you hungry ?
                            </div>
                            <div className="col-2">
                                <i className="fas fa-concierge-bell"/>
                                <i className="fas fa-utensils"/>
                            </div>

                            <div className="col-2">
                                <button className="btn btn-sm btn-dark btn-block btnToggle"
                                        data-toggle="collapse"
                                        data-target={`#mealsCollapse${props.paxId}`}
                                        aria-expanded="false" aria-controls="collapseExample">
                                    Toggle
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="collapse" id={`mealsCollapse${props.paxId}`}>

                <div className="row">
                    <div className="col-12">
                        <MealLeg key={0} leg={0}
                                 mealOptions={props.mealOptions}
                                 boughtMeals={props.boughtMeals}
                                 paxData={props.paxData}
                                 currency={props.currency}
                                 paxId={props.paxId}
                                 addMealHandler={props.addMealHandler}
                                 segments={props.segments}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <MealLeg key={1} leg={1}
                                 mealOptions={props.mealOptions}
                                 boughtMeals={props.boughtMeals}
                                 currency={props.currency}
                                 paxData={props.paxData}
                                 paxId={props.paxId}
                                 addMealHandler={props.addMealHandler}
                                 segments={props.segments}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MealsComponent;
