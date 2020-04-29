import React, { Component } from "react";
import SeatMap from "./SeatMap";
import { DataContext } from "./PreSeatContext";

class SegmentTabs extends Component {
  static contextType = DataContext;

  render() {
    let { segments } = this.context;

    let segsArr = segments.map((sg, idx) => {
      let key = sg.from.toLowerCase() + "-" + sg.to.toLowerCase();

      return Object.assign(
        {},
        { key, href: "#" + key, tab: "tb" + key, selected: idx === 0 },
        sg
      );
    });

    return (
      <section>
        <div className="row">
          <div className="col-8 offset-2">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {segsArr.map(sgx => {
                let clsName = sgx.id > 0 ? " nav-link " : "nav-link active";

                return (
                  <li key={sgx.key} className="nav-item">
                    <a
                      className={clsName}
                      id={`string${sgx.key}`}
                      data-toggle="tab"
                      href={sgx.href}
                      role="tab"
                      aria-controls={sgx.key}
                      aria-selected={sgx.sel}
                    >
                      {sgx.from}-{sgx.to}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="tab-content" id="myTabContent">
              {segsArr.map(sgx => {
                let clsName =
                  sgx.id > 0 ? " tab-pane fade " : "tab-pane fade show active";
                return (
                  <div
                    key={sgx.key}
                    className={clsName}
                    id={sgx.key}
                    role="tabpanel"
                    aria-labelledby={sgx.tab}
                  >
                    <SeatMap
                      key={sgx.key}
                      segId={sgx.id}
                      stmp={this.props.stmp[sgx.id]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SegmentTabs;
