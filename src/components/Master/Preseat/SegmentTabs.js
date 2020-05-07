import React, { Component } from "react";
import SeatMap from "./SeatMap";
import {DataContext} from "../../OtaContext";

class SegmentTabs extends Component {
  static contextType = DataContext;

  render() {
    let  segments  = [];
    //   console.log('reseat leggss');

   //console.log(this.context.ItineraryRsc);


   this.context.ItineraryRsc.forEach(leg => {
    //   console.log(leg);

      leg.segments.forEach(sg => {
        segments.push(sg);
      });
    });

   

    let segsArr = segments.map((sg, idx) => {
      let key = sg.segKey; //sg.from['iata'] + "-" + sg.to['iata'];
         console.log(sg);

   console.log(sg.from['iata']);


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
                      stmp={this.props.stmp[sgx.segId]}
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
