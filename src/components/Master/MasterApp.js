import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './SideBar/MasterSideBar';
import ItineraryData from './Segments/ItineraryData';


import * as actsMaster from '../../actions/master/actionsMaster';
import * as actsPaxes from '../../actions/master/actionsPassengers';


import MasterContact from './Passengers/MasterContact';
import {Translate} from "react-redux-i18n";
import { withRouter } from "react-router-dom";


class MasterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.upsalesPage = this.upsalesPage.bind(this);


    }

    upsalesPage()
    {
        console.log('click');
       history.push("/some/Path");

    }

    componentDidMount() {
        this.props.fetchCountriesAction();

        this.props.firstLoad();
    }

    render() {
        return (
            <div className="busApp">
                <div className="row">

                    <div className="col-8">

                        <ItineraryData
                            tripData={this.props.tripData}
                        />

                        <MasterPassengerList
                            tripData={this.props.tripData}
                            addPaxHandler={this.props.addPaxHandler}
                            removePaxHandler={this.props.removePaxHandler}
                            editPaxHandler={this.props.editPaxHandler}
                            changePaxCabinClassHandler={this.props.changePaxCabinClassHandler}
                            editNameHandler={this.props.editPaxNameHandler}
                            passengers={this.props.passengers}
                            countryList={this.props.asyncData.countries}
                        />


                    </div>

                    <div className="col-4">
                        <MasterSideBar/>
                    </div>
                </div>


                <MasterContact
                    contact={this.props.contact}
                    countryList={this.props.asyncData.countries}
                    editContactHandler={this.props.editContactHandler}
                />



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

function mapStateToProps(state) {
    return {
        passengers: state.passengersMasterReducer,
        contact: state.contactMasterReducer,
        tripData: state.airTripReducer,
        asyncData: state.countryListReducer,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPaxHandler: actsPaxes.addMasterPassengerAction,
        removePaxHandler: actsPaxes.removeMasterPassengerAction,
        editPaxHandler: actsPaxes.changeMasterPassengerAction,
        changePaxCabinClassHandler: actsPaxes.changeAirCabinClassPassengerAction,
        firstLoad: actsMaster.firstLoadMasterAction,
        editPaxNameHandler: actsPaxes.editMasterPassengerNameAction,
        editContactHandler: actsPaxes.editMasterContactAction,
        fetchCountriesAction: actsMaster.fetchCountriesAction,
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MasterApp);
