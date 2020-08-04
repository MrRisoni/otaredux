import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";

class PaxSelector extends Component {
  static contextType = DataContext;

  getPassengerClasName(currentPaxId, activePaxId) {
    return currentPaxId === activePaxId ? "table-info" : "";
  }

  render() {
    let { passengers, currentCurrency } = this.context;

    let activePax = 0;
    let segmentsPreseat = [];
    this.context.ItineraryRsc.forEach(leg => {
      leg.segments.forEach(sg => {
        segmentsPreseat.push({
          her: sg.from["iata"],
          segId: sg.segId,
          hin: sg.to["iata"],
          segKey: sg.segKey
        });
      });
    });

    let segmentsCost = [];
    let overall = 0;
    for (var s = 0; s < segmentsPreseat.length; s++) {
      let ttl = 0;
      for (var p = 0; p < passengers.length; p++) {
        ttl += parseFloat(
          passengers[p]["upsalesData"]["preseating"]["choices"][s].cost
        );
        overall += parseFloat(
          passengers[p].upsalesData.preseating.choices[s].cost
        );
      }
      segmentsCost.push({ key: s, total: ttl.toFixed(2) });
    }
    overall = overall.toFixed(2);
    return (
      <section>
        <div className="row">
          <div className="col-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>Passengers</td>
                  {segmentsPreseat.map(sg => (
                    <th key={sg.segKey}>{sg.segKey}</th>
                  ))}
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {passengers.map((psg, pxId) => (
                  <tr
                    key={psg.key}
                    className={this.getPassengerClasName(pxId, activePax)}
                  >
                    <td>
                      {psg.name} {psg.surname}
                    </td>
                    {psg["upsalesData"]["preseating"]["choices"].map(choice => (
                      <td key={choice.key}>{choice.chosen}</td>
                    ))}
                    <td>
                      <button
                        className="btn btn-sm btn-primary selectPaxBtn"
                        onClick={() =>
                          this.context.functions.setActivePax(psg.key)
                        }
                      >
                        General.Select
                      </button>

                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() =>
                          this.context.functions.clearSeats(psg.key)
                        }
                      >
                        General.ClearAll
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <td></td>
                  {segmentsPreseat.map(sg => (
                    <th key={sg.key}>{sg.key}</th>
                  ))}
                  <td>General.Total</td>
                </tr>
              </thead>
              <tbody>
                {passengers.map(psg => (
                  <tr key={psg.key}>
                    <td>{psg.name}</td>
                    {psg["upsalesData"]["preseating"]["choices"].map(choice => (
                      <td key={choice.key}>
                        {choice.cost} {currentCurrency.code}
                      </td>
                    ))}
                    <td>
                      {psg.totalCost} {currentCurrency.code}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>General.Total</td>
                  {segmentsCost.map(sgc => (
                    <td key={sgc.key}>
                      {sgc.total} {currentCurrency.code}
                    </td>
                  ))}
                  <td>
                    {overall} {currentCurrency.code}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default PaxSelector;
