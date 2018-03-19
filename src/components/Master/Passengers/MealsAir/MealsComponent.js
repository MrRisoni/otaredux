import React from 'react';
import MealLeg from './MealLeg';

const MealsComponent = function (props) {

    return (

        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-success" role="alert">

                        <div className="row">
                            <div className="col-md-6">
                                Are you hungry ?
                            </div>
                            <div className="col-md-2">
                                <i className="fas fa-utensils"/>
                            </div>

                            <div className="col-md-2">
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
                    <div className="col-md-12">
                        <MealLeg key={0} leg={0}
                                 legTitle="Departure"
                                 mealOptions={props.mealOptions}
                                 boughtMeals={props.boughtMeals}
                                 currency={props.currency}
                                 paxId={props.paxId}
                                 addMealHandler={props.addBagHandler}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <MealLeg key={1} leg={1}
                                 legTitle="Return"
                                 mealOptions={props.mealOptions}
                                 boughtMeals={props.boughtMeals}
                                 currency={props.currency}
                                 paxId={props.paxId}
                                 addMealHandler={props.addBagHandler}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MealsComponent;
