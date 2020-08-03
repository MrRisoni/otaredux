import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";
import { pitch } from "file-loader";

class MealLeg extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);

    this.changeMeal = this.changeMeal.bind(this);
  }

 changeMeal(ev)
 {
   console.log(ev.target.value);
   this.context.functions.actionMeal({paxId:this.props.paxId,
    legId:this.props.legId,option:ev['target']['value']});
 }

  render() {
    let mealsArray =this.context.MealsRsc.filter(ml => {
        if (this.props.ptc == 'CNN') {
          if (ml.ssr == 'CHML') {
            return ml;
          }
        }
        else {
          if (ml.ssr != 'CHML') {
            return ml;
          }
        }
    });


    return (
      <div className="row">
        <div className="col-12">
          <select className="form-control" onChange={this.changeMeal}>
            <option key="0" value="" />
            {mealsArray.filter(ml => ml.legId == this.props.leg).map(ml => (
              <option key={ml.key} value={ml.id}>
                {ml.title}  {ml.price} {this.context.currentCurrency.code}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default MealLeg;
