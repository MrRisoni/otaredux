import React, {Component} from "react";
import ItineraryData from "./Segments/ItineraryData";
import MasterSideBar from "./SideBar/MasterSideBar";
//import BrandedFares from './Branded/BrandedFares';
import PreSeat from "./AirUpsales/Preseat/PreSeat";
import YesNoUpsale from "./AirUpsales/YesNoUpsale";

import WebCheckin from "./AirUpsales/WebCheckin";
import FastTrackList from "./AirUpsales/FastTrack/FastTrackList";
import AirHelp from "./AirUpsales/AirHelp";
import LoungeAccess from './AirUpsales/LoungeAccess/LoungeAccess';
import PassengerTable from './Passengers/PassengerTable';
import Parking from "./AirUpsales/Parking/Parking";
import { DataContext } from "../OtaContext";


class UpsalesPage extends Component {
  static contextType = DataContext;

    render() {

      let priceBrb =
        this.context.upsalesPricing.blueRibbon *
        this.context.currentCurrency.rate;

      priceBrb = priceBrb.toFixed(2);

      let priceFlex = this.context.upsalesPricing.flexTicket * this.context.currentCurrency.rate * (this.context.numADT + this.context.numCNN);
      priceFlex = priceFlex.toFixed(2);

      const brbDescr = " Pay " + priceBrb + " " + this.context.currentCurrency.code +   "  and you will receive 1000 EUR reimbursement for each lost   baggage";
      const flexDescr = "  Pay " +  priceFlex  + " " +  this.context.currentCurrency.code + "  and you may cancel/amend your ticket for free! ";

        return (
            <div className="busApp">
                <div className="row">
                    <div className="col-8">
                        {/*  <ItineraryData
                        tripData={this.props.tripData}
                    />
*/}
                    <PassengerTable/>
                    </div>

                    <div className="col-4">
                        <MasterSideBar/>
                    </div>
                </div>


                <YesNoUpsale title="Buy Blue Ribbon Bag Insurance!" 
                code="brb"
                upsaleHandler={this.context.functions.actionBlueRibbon}
                description={brbDescr}/>


                <YesNoUpsale title="Flexible Ticket" 
                 code="flxtkt"
                upsaleHandler={this.context.functions.actionFlexTicket}
                description={flexDescr}/>


                {/*  <PreSeat/>

                <FastTrackList/>
                <WebCheckin/>
                <LoungeAccess/>
                <Parking/>

                <AirHelp/>
              */}
            </div>
        );
    }
}

export default UpsalesPage;
