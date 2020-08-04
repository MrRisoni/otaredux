import React, { Component } from "react";
import MasterPassenger from "./MasterPassenger";
import { DataContext } from "../../OtaContext";
import ButtonToggle from "../../Common/ButtonToggle";

class MasterPassengerList extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.addPaxHandler = this.addPaxHandler.bind(this);
  }

  addPaxHandler() {
    this.context.functions.addPassenger();
  }
  render() {
    return (
      <section>
        <div className="busPassengerList">
          <div className="alert alert-primary" role="alert">
            <div className="row">
              <div className="col-3">FillThePassengerData</div>

              <ButtonToggle  target={`passengerListCollapse`} clsName={"offset-6"} />

            </div>
          </div>

          <div className="show" id="passengerListCollapse">
            {this.context.passengers
              .filter(pxItem => pxItem.active == true)
              .map(pax => (
                <MasterPassenger key={pax.id} passenger={pax} />
              ))}
            </div>

          <div className="row addOnePassenger">
            <div className="col-4 offset-4">
              <button
                className="btn btn-primary btn-success"
                onClick={this.addPaxHandler}
              >
                {
                  this.context.translations[this.context.lang].passengers
                    .AddPassenger
                }
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MasterPassengerList;
