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

        this.upsalesPage = this.upsalesPage.bind(this);

    }

    upsalesPage()
    {
        console.log('click');
       this.props.router.push("/some/Path");

    }

    componentDidMount() {
        this.context.functions.firstLoad();
    }

    render() {
        return (
            <div className="busApp">
                <div className="row">

                    <div className="col-8">

                    

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
                        

                <div className="row addOnePassenger show passengerListCollapse">
                    <div className="col-4 offset-4">
                        <button className="btn btn-primary btn-success" onClick={this.upsalesPage}>
                           Next
                        </button>
                    </div>
                </div>


            </div>

        );
    }
}

export default MasterApp;
