import React, { Component } from 'react';
import ItineraryData from './Segments/ItineraryData';
import MasterSideBar from './SideBar/MasterSideBar';
//import BrandedFares from './Branded/BrandedFares';
import PreSeat from './Preseat/PreSeat';
/*
import WebCheckin from './Passengers/WebCheckin';
import FastTrack from './FastTrack';
import FlexibleTicket from './Passengers/FlexibleTicket';
import AirHelp from './AirHelp';
import BlueRibbon from './Passengers/BlueRibbon';
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


            <PreSeat/>


          {/*  <BrandedFares/>
            <WebCheckin/>
            <FastTrack/>
            <FlexibleTicket/>
            <AirHelp/>
            <BlueRibbon/>
            <Parking/>
            <LoungeAccess/>
 */}

        </div>
    );
  }
}


export default UpsalesPage;
