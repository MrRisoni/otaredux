import React from 'react';
import MealType from "./MealType";

const MealSegment = function (props) {

    console.log('meals segment');
    console.log(props);

    let dessertsDiv = (<div></div>);
    if (props.desserts.length >0) {
        dessertsDiv = <MealType type="Dessert"
                                currency={props.currency}
                                data={props.desserts}/>
    }


    let mainCourses = (<div></div>);
    if (props.mainCourses.length >0) {
        mainCourses = <MealType type="Main Course"
                                currency={props.currency}
                                data={props.mainCourses}/>
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
