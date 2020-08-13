import React, { Component } from "react";
import BagSelection from "./BagSelection";
import { DataContext } from "../../../OtaContext";

class BagLeg extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
  }

  render() {
    let legTitle =  this.context.translations[this.context.lang].flight.Departure;

    if (this.props.leg >0) {
      legTitle = this.context.translations[this.context.lang].flight.Return;
    }

    return (
      <section>
        <div className="row">
          <div className="col-5">
            <div className="card">
              <div className="card-header">{legTitle}</div>
              <div className="card-body">
                {this.props.bagList
                  .filter(bg => this.props.leg == bg.legId)
                  .map(bgItem => (
                    <BagSelection
                      bagData={bgItem}
                      key={bgItem.key}
                      ptc={this.props.ptc}
                      legId={this.props.leg}
                      paxId={this.props.paxId}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BagLeg;
