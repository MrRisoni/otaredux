import React from 'react';
import MealSegment from './MealSegment';

const MealLeg = (props) => {
  const mealSegments = [];

  const cabinsForThisPax = props.cabinSelection.filter(cb => cb.paxId == props.paxData.id);


  props.segments.forEach((seg) => {
    if (props.leg == seg.legId) {
      const mainCourses = [];
      const desserts = [];
      const segRoute = `${seg.from}-${seg.to}`;


      props.mealOptions.forEach((meal) => {
        cabinsForThisPax.forEach((cb) => {
          if ((seg.id == meal.segId) && (meal.segId == cb.segId) && (meal.classes.indexOf(cb.cabin) > -1)) {
            if (meal.type == 'Main') {
              mainCourses.push(meal);
            }
            if (meal.type == 'Dessert') {
              desserts.push(meal);
            }
          }
        });
      });


      if ((mainCourses.length + desserts.length) > 0) {
        const key = `mleg${props.paxId}${props.leg}`;
        mealSegments.push(<MealSegment
          mainCourses={mainCourses}
          desserts={desserts}
          segData={segRoute}
          paxData={props.paxData}
          key={key}
          segId={seg.id}
          legId={props.leg}
          currency={props.currency}
          paxId={props.paxId}
          removeMealHandler={props.removeMealHandler}
          addMealHandler={props.addMealHandler}
        />);
      }
    }
  });


  return (
    <div className="row">
      <div className="col-12">
        {mealSegments}
      </div>
    </div>

  );
};

export default MealLeg;
