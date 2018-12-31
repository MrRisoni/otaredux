import React, { Component } from 'react';
import MealLeg from './MealLeg';
import { Translate } from 'react-redux-i18n';


class MealsComponent extends Component {
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

                    <Translate value="upsales.Hungry"/>
                </div>
                <div className="col-2">
                  <i className="fas fa-concierge-bell" />
                  <i className="fas fa-utensils" />
                </div>

                <div className="col-2">
                  <button
                    className="btn btn-sm btn-dark btn-block btnToggle"
                    data-toggle="collapse"
                    data-target={`#mealsCollapse${this.props.paxId}`}
                    aria-expanded="false"
aria-controls="collapseExample"
                  >

                                       <Translate value="general.Toggle"/>
</button>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="collapse" id={`mealsCollapse${this.props.paxId}`}>

          {keys.map(kk => (
            <div className="row">
              <div className="col-12">
                <MealLeg
                  key={kk}
                  leg={kk}
                  paxData={this.props.paxData}
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
