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

/*
import Parking from './Parking/Parking';
import LoungeAccess from './LoungeAccess/LoungeAccess';
import * as actsMaster from '../../actions/master/actionsMaster';
import PassengerTable from './Passengers/PassengerTable';
*/

class UpsalesPage extends Component {
    render() {
        return (
            <div className="busApp">
                <div className="row">
                    <div className="col-8">
                        {/*  <ItineraryData
                        tripData={this.props.tripData}
                    />

                    <PassengerTable
                        passengers={this.props.passengers}
                    /> */}
                    </div>

                    <div className="col-4">
                        <MasterSideBar/>
                    </div>
                </div>

                {/*  <PreSeat/> */}

                <FastTrackList/>
                <WebCheckin/>
                <LoungeAccess/>

                <AirHelp/>
                <FlexibleTicket/>
                <BlueRibbon/>
            </div>
        );
    }
}

export default UpsalesPage;
