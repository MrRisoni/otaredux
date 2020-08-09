import React, { Component } from "react";
import MealLeg from "./MealLeg";
import ButtonToggle from "../../../Common/ButtonToggle";
import { DataContext } from "../../../OtaContext";

class MealsComponent extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
  }

  render() {
    const keys = [0, 1];
    return (
      <section>
        <div className="row">
          <div className="col-12">
            <div className="alert alert-success" role="alert">
              <div className="row">
                <div className="col-6">
                {this.context.translations[this.context.lang].upsales.Hungry}
                </div>
                <div className="col-2">
                  <i className="fas fa-concierge-bell" />
                  <i className="fas fa-utensils" />
                </div>

                <ButtonToggle
                  target={`mealsCollapse${this.props.paxId}`}
                  clsName={"offset-2"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="collapse" id={`mealsCollapse${this.props.paxId}`}>
          {keys.map(kk => (
            <div key={kk} className="row">
              <div className="col-12">
                <MealLeg
                  key={kk}
                  leg={kk}
                  ptc={this.props.ptc}
                  paxId={this.props.paxId}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default MealsComponent;
