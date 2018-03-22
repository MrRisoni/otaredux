import React from 'react';
import MealType from "./MealType";

const MealSegment = function (props) {

    console.log('meals segment');
    console.log(props);

    let dessertsDiv = (<div></div>);
    if (props.desserts.length >0) {
        dessertsDiv = <MealType type="Dessert"
                                legId={props.legId}
                                paxId={props.paxId}
                                currency={props.currency}
                                data={props.desserts}
                                addMealHandler={props.addMealHandler}/>
    }


    let mainCourses = (<div></div>);
    if (props.mainCourses.length >0) {
        mainCourses = <MealType type="Main Course"
                                legId={props.legId}
                                paxId={props.paxId}
                                currency={props.currency}
                                data={props.mainCourses}
                                addMealHandler={props.addMealHandler}/>
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


            {mainCourses}
            {dessertsDiv}

        </div>
    )
};

export default MealSegment;
