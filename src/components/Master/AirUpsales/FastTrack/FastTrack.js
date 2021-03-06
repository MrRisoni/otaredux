import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";
import ButtonToggle from "../../../Common/ButtonToggle";

class FastTrack extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    if (ev.target.value == 1) {
      this.context.functions.purchaseFastTrack({
        point: this.props.point,
        add: 1
      });
    } else {
      this.context.functions.purchaseFastTrack({
        point: this.props.point,
        add: -1
      });
    }
  }

  render() {
    let price = this.props.price.toFixed(2) * this.context.currentCurrency.rate;
    price = price.toFixed(2);

    return (
      <section className="upsalesSection">
        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="card-header bg-light">
                <div className="row">
                  <div className="col-8">
                  {this.context.translations[this.context.lang].upsales.FastTrack}

                  </div>

                  <ButtonToggle target={"fastTrackCollapse"} 
                   clsName={"offset-2"}/>
                </div>
              </div>

              <div className="card-body collapse" id="fastTrackCollapse">
                <div className="row">
                  <div className="col-8">
                    Pay {price} {this.context.currentCurrency.code} and you will
                    be placed in a priority queue during security check for
                    airport <b>{this.props.point}</b>
                  </div>

                  <div className="col-3">
                    <select
                      className="form-control"
                      onChange={this.handleClick}
                    >
                      <option key="no" value="0">
                        No thanks
                      </option>
                      <option key="yes" value="1">
                        Yes please
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FastTrack;
