import React, { Component } from 'react';
import BagLeg from './BagLeg';
import {DataContext} from "../../../OtaContext";


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

                  upsales.PurchaseBags
                </div>
                <div className="col-2">
                  <i className="fas fa-suitcase" />
                </div>

                <div className="col-2">
                  <button
                    className="btn btn-sm btn-dark btn-block btnToggle"
                    data-toggle="collapse"
                    data-target={`#bagCollapse${this.props.paxId}`}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >

                    general.Toggle
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="collapse" id={`bagCollapse${this.props.paxId}`}>

          {keys.map(kk => (
            <div className="row bagLegDiv">
              <div className="col-10 offset-1">
                <BagLeg
                  key={kk}
                  leg={kk}
                  limitBags={2}
                  paxId={this.props.paxId}
                />
              </div>
            </div>))}


        </div>

      </section>);
  }
}




export default BagComponent;
