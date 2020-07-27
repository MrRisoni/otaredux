import React, { Component } from "react";
import SeatMap from "./SeatMap";
import {DataContext} from "../../../OtaContext";

class SegmentTabs extends Component {
  static contextType = DataContext;

  render() {
    let  segmentsPreseat  = [];

   this.context.ItineraryRsc.forEach(leg => {
      leg.segments.forEach(sg => {
        segmentsPreseat.push({ her:sg.from['iata'],
        segId:sg.segId,
        hin:sg.to['iata'] , 
        segKey: sg.segKey});
      });
    });



    let segsArr = segmentsPreseat.map((sg, idx) => {
      return Object.assign(
        {},
        {  href: "#" + sg.segKey, tab: "tb" + sg.segKey, sel: idx === 0 },
        sg
      );
    });

      console.log('PRESEATING');
      console.log(segsArr);

      return (
       <section>
         <div className="row">
           <div className="col-8">
             <ul className="nav nav-tabs" id="myTab" role="tablist">
               {segsArr.map(sgx => {
                 let clsName = sgx.segId > 0 ? " nav-link " : "nav-link active";

                 return (
                   <li key={sgx.segKey} className="nav-item">
                     <a
                       className={clsName}
                       id={`id_${sgx.segKey}`}
                       data-toggle="tab"
                       href={sgx.href}
                       role="tab"
                       aria-controls={sgx.segKey}
                       aria-selected={sgx.sel}
                     >
                       {sgx.her}-{sgx.hin}{" "}
                     </a>
                   </li>
                 );
               })}
             </ul>

             <div className="tab-content" id="myTabContent">
               {segsArr.map(sgx => {
                 let clsName =
                   sgx.segId > 0 ? " tab-pane fade " : "tab-pane fade show active";
                 return (
                   <div
                     key={sgx.segKey}
                     className={clsName}
                     id={sgx.segKey}
                     role="tabpanel"
                     aria-labelledby={sgx.tab}
                   >

                   SegmentId {sgx.segId}
                  {/*    <SeatMap
                       key={sgx.key}
                       segId={sgx.segId}
                       seats_map={this.props.seat_map_data[sgx.segId]}
                     />   */}
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
