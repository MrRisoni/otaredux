import React, { Component } from "react";
import { DataContext } from "../../OtaContext";

class FareTaxes extends Component {
  static contextType = DataContext;

  render() {
    console.log(this.context.ItineraryRsc);
    let rows = [];
    this.context.ItineraryRsc.forEach(leg => {
      leg.pricing.forEach(prices => {
        var singleRow = [];
        var proceed = true;
        var counter = this.context.numADT;
        if (prices.ptc == "CNN") {
          counter = this.context.numCNN;
        }
        if (prices.ptc == "INF") {
          counter = this.context.numINF;
        }

        if (counter > 0) {
         let kleidi = 'frtx_' + prices.ptc + '_lg' + leg.legId;
         rows.push(
          <tr key={kleidi}>
              <td>Leg</td>
              <td>{prices.ptc}</td>
              <td>{prices.fareEur}</td>
              <td>{prices.taxesEur}</td>
          </tr>
         )
        }
      });
    });

    return (
      <section>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Route</th>
              <th>Type</th>
              <th>Fare</th>
              <th>Tax</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </section>
    );
  }
}

export default FareTaxes;
