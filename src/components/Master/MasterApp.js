import React, {Component} from 'react';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './SideBar/MasterSideBar'
import ItineraryData from './Segments/ItineraryData';
import FareTaxes from './Segments/FareTaxes';
import {DataContext} from "../OtaContext";
import MasterContact from './Passengers/MasterContact';
import UpsalesComponent from "./UpsalesComponent";

class MasterApp extends Component {
  static contextType = DataContext;

    constructor(props) {
        super(props);
        this.state = {};
     
    }
    componentDidMount() {
        this.context.functions.firstLoad();
    }

    render() {
        return (
            <div className="busApp">
                <div className="row">

                    <div className="col-8">
                        <ItineraryData tripData={this.context.ItineraryRsc}/>
                        <MasterPassengerList/>
                    </div>

                    <div className="col-4">
                           <FareTaxes/>
                          <MasterSideBar/>                         
                    </div>
                </div>

                <MasterContact
                    contact={this.props.contact}
                    countryList={[]}
                    editContactHandler={null}
                />

                <UpsalesComponent product="air" />
                        

            </div>

        );
    }
}

export default MasterApp;
