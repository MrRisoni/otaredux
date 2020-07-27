import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";
import ButtonToggle from "../../../Common/ButtonToggle";

class LoungeAirport extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {}

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
                  <div className="col-9">Lounge Access</div>

                  <ButtonToggle target={"LoungeCollapse"} />
                </div>
              </div>

              <div className="card-body collapse" id="LoungeCollapse">
                <div className="row">
                  <div className="col-8">
                    Per Hour {price} {this.context.currentCurrency.code}{" "}
                    <b>{this.props.point}</b>
                  </div>

                  <div className="col-3">
                    <div className="row">
                      <div className="col-6">
                        park days {this.props.parkDays}
                      </div>
                      <div className="col-4">
                        <button
                          className="btn-primary btn btn-sm"
                          onClick={this.handleAddDays}
                        >
                          Add Day
                        </button>
                        <button
                          className="btn-danger btn btn-sm"
                          onClick={this.handleSubtractDays}
                        >
                          Remove Day
                        </button>
                      </div>
                    </div>
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

export default LoungeAirport;
