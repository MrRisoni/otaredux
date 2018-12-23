import React from 'react';
import MealSegment from "./MealSegment";

const MealLeg = function (props) {

    let mealSegments = [];

    let isYankee =   (['W','Y'].indexOf(props.paxData.cabinClass) >-1);


    props.segments.forEach( seg => {
        // for each segment
        let appetizers = [];
        let mainCourses = [];
        let desserts = [];
        const segRoute = seg.from + '-' + seg.to;


        props.mealOptions.forEach(meal => {

           if (meal.route === segRoute) {

               if (meal.legId === props.leg) {
                   if (meal.type === 'Main') {
                       mainCourses.push(meal);
                   }
                   if (isYankee === false) {
                       if (meal.type === 'Dessert') {
                           desserts.push(meal);
                       }
                   }
               }
           }
        });

        if ((appetizers.length + mainCourses.length + desserts.length) > 0) {
            const key = 'mleg' + props.paxId + props.leg;
            mealSegments.push(<MealSegment appetizers={appetizers}
                                           mainCourses={mainCourses}
                                           desserts={desserts}
                                           segData={segRoute}
                                           paxData={props.paxData}
                                           key={key}
                                           legId={props.leg}
                                           currency={props.currency}
                                           paxId={props.paxId}
                                           addMealHandler={props.addMealHandler}/>);
        }
    });


    return (
        <div className="row">
            <div className="col-12">
                {mealSegments}
            </div>
        </div>

    )
}

export default MealLeg;
