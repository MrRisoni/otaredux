import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";

class MealLeg extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <select className="form-control">
            <option key="" value="" />
            {this.context.MealsRsc.map(ml => (
              <option key={ml.key} value={ml.id}>
                {ml.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default MealLeg;
