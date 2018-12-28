import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealSegment from './MealSegment';


class MealLeg extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const mealSegments = [];

    const cabinsForThisPax = this.props.cabinSelection.filter(cb => cb.paxId == this.props.paxData.id);


    this.props.segments.forEach((seg) => {
      if (this.props.leg == seg.legId) {
        const mainCourses = [];
        const desserts = [];
        const segRoute = `${seg.from}-${seg.to}`;


        this.props.mealOptions.forEach((meal) => {
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
          const key = `mleg${this.props.paxId}${this.props.leg}`;
          mealSegments.push(<MealSegment
            mainCourses={mainCourses}
            desserts={desserts}
            segData={segRoute}
            paxData={this.props.paxData}
            key={key}
            segId={seg.id}
            legId={this.props.leg}
            paxId={this.props.paxId}
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
  }
}

function mapStateToProps(state) {
  return {
    cabinSelection: state.fetchCabinPaxPerSegmentReducer,
    mealOptions: state.getMealsReducer,
    segments: state.getLegsReducer,
  };
}


export default connect(mapStateToProps)(MealLeg);
