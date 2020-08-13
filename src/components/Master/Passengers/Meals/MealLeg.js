import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";

class MealLeg extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);

    this.changeMeal = this.changeMeal.bind(this);
  }

  changeMeal(ev) {
    this.context.functions.actionMeal({
      paxId: this.props.paxId,
      legId: this.props.leg,
      option: ev["target"]["value"]
    });
  }

  render() {
    let mealsArray = this.context.MealsRsc.filter(ml => {
      if (this.props.ptc == "CNN") {
        if (ml.ssr == "CHML") {
          return ml;
        }
      } else {
        if (ml.ssr != "CHML") {
          return ml;
        }
      }
    });

    let legTitle =  this.context.translations[this.context.lang].flight.Departure;

    if (this.props.leg >0) {
      legTitle = this.context.translations[this.context.lang].flight.Return;
    }

    return (
      <div className="row">
      <div className="col-5">
        <div className="card">
          <div className="card-header">{legTitle}</div>
          <div className="card-body">
          
            <select className="form-control" onChange={this.changeMeal}>
              <option key="" value="" />
              {mealsArray
                .filter(ml => ml.legId == this.props.leg)
                .map(ml => (
                  <option key={ml.ssr} value={ml.ssr}>
                    {ml.title} {ml.price} {this.context.currentCurrency.code}
                  </option>
                ))}
            </select>
          </div>
      </div>
        </div>
      </div>
    );
  }
}

export default MealLeg;
