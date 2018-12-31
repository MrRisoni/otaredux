import React, { Component } from 'react';
import MealType from './MealType';


class MealSegment extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    let dessertsDiv = (<div />);
    if (this.props.desserts.length > 0) {
      dessertsDiv = (
        <MealType
          type="Dessert"
          legId={this.props.legId}
          paxId={this.props.paxId}
          paxData={this.props.paxData}
          segId={this.props.segId}
          data={this.props.desserts}
        />
      );
    }


    let mainCourses = (<div />);
    if (this.props.mainCourses.length > 0) {
      mainCourses = (
        <MealType
          type="Main"
          legId={this.props.legId}
          paxId={this.props.paxId}
          paxData={this.props.paxData}
          segId={this.props.segId}
          data={this.props.mainCourses}
        />
      );
    }

    return (
      <section>
        <div className="row">
          <div className="col-12">
            <div className="alert alert-primary" role="alert">
              {this.props.segData}
            </div>
          </div>
        </div>


        {mainCourses}
        {dessertsDiv}

      </section>
    );
  }
}


export default MealSegment;
