import React from 'react';
import MealType from "./MealType";

const MealSegment = (props) => {

    console.log('MealSegment ');
    console.log(props);

    let dessertsDiv = (<div></div>);
    if (props.desserts.length >0) {
        dessertsDiv = <MealType type="Dessert"
                                legId={props.legId}
                                paxId={props.paxId}
                                paxData={props.paxData}
                                currency={props.currency}
                                segId={props.segId}
                                data={props.desserts}
                                removeMealHandler={props.removeMealHandler}
                                addMealHandler={props.addMealHandler}/>
    }


    let mainCourses = (<div></div>);
    if (props.mainCourses.length >0) {
        mainCourses = <MealType type="Main"
                                legId={props.legId}
                                paxId={props.paxId}
                                paxData={props.paxData}
                                currency={props.currency}
                                segId={props.segId}
                                data={props.mainCourses}
                                removeMealHandler={props.removeMealHandler}
                                addMealHandler={props.addMealHandler}/>
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
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
