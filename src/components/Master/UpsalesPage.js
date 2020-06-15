import React, {Component} from "react";
import ItineraryData from "./Segments/ItineraryData";
import MasterSideBar from "./SideBar/MasterSideBar";
//import BrandedFares from './Branded/BrandedFares';
import PreSeat from "./AirUpsales/Preseat/PreSeat";
import YesNoUpsale from "./AirUpsales/YesNoUpsale";

import WebCheckin from "./AirUpsales/WebCheckin";
import FastTrackList from "./AirUpsales/FastTrack/FastTrackList";
import FlexibleTicket from "./AirUpsales/FlexibleTicket";
import AirHelp from "./AirUpsales/AirHelp";
import BlueRibbon from "./AirUpsales/BlueRibbon";
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

      let brbDescr = " Pay " + priceBrb + " " + this.context.currentCurrency.code +   "  and you will receive 1000 EUR reimbursement for each lost   baggage";

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
                upsaleHandler={this.context.functions.actionBlueRibbon}
                description={brbDescr}/>

  <FlexibleTicket/>

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
