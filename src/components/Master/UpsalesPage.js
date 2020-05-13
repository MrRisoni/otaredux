import React, {Component} from "react";
import ItineraryData from "./Segments/ItineraryData";
import MasterSideBar from "./SideBar/MasterSideBar";
//import BrandedFares from './Branded/BrandedFares';
import PreSeat from "./AirUpsales/Preseat/PreSeat";

import WebCheckin from "./AirUpsales/WebCheckin";
import FastTrackList from "./AirUpsales/FastTrack/FastTrackList";
import FlexibleTicket from "./AirUpsales/FlexibleTicket";
import AirHelp from "./AirUpsales/AirHelp";
import BlueRibbon from "./AirUpsales/BlueRibbon";
import LoungeAccess from './AirUpsales/LoungeAccess/LoungeAccess';
import PassengerTable from './Passengers/PassengerTable';
import Parking from "./AirUpsales/Parking/Parking";


class UpsalesPage extends Component {
    render() {
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

                {/*  <PreSeat/> */}

                <FastTrackList/>
                <WebCheckin/>
                <LoungeAccess/>
                <Parking/>

                <AirHelp/>
                <FlexibleTicket/>
                <BlueRibbon/>
            </div>
        );
    }
}

export default UpsalesPage;
