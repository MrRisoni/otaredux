import React, { Component } from "react";
import BagLeg from "./BagLeg";
import { DataContext } from "../../../OtaContext";
import ButtonToggle from "../../../Common/ButtonToggle";

class BagComponent extends Component {
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
                {this.context.translations[this.context.lang].upsales.PurchaseBags}
                </div>
                <div className="col-2">
                  <i className="fas fa-suitcase" />
                </div>

                <ButtonToggle
                  target={`bagCollapse${this.props.paxId}`}
                  clsName={"offset-2"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="collapse" id={`bagCollapse${this.props.paxId}`}>
          {keys.map(kk => (
            <div key={kk} className="row bagLegDiv">
              <div className="col-10 offset-1">
                <BagLeg
                  leg={kk}
                  bagList={this.context.BagsRsc}
                  paxId={this.props.paxId}
                  ptc={this.props.ptc}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default BagComponent;
