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
        // console.log(sg);

  // console.log(sg.from['iata']);


      return Object.assign(
        {},
        {  href: "#" + sg.segKey, tab: "tb" + sg.segKey, sel: idx === 0,
      her:sg.from['iata'],hin:sg.to['iata'] },
        sg
      );
    });


      console.log(segsArr);

      return (
       <section>
         <div className="row">
           <div className="col-8 offset-2">
             <ul className="nav nav-tabs" id="myTab" role="tablist">
               {segsArr.map(sgx => {
                 let clsName = sgx.segId > 0 ? " nav-link " : "nav-link active";

                 return (
                   <li key={sgx.segKey} className="nav-item">
                     <a
                       className={clsName}
                       id={sgx.segKey}
                       data-toggle="tab"
                       href={sgx.href}
                       role="tab"
                       aria-controls={sgx.key}
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

                   {sgx.segId}
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
