import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './SideBar/MasterSideBar';
import ItineraryData from './Segments/ItineraryData';



import {addMasterPassengerAction,firstLoadMasterAction,editMasterPassengerNameAction,editMasterContactAction,
    changeMasterPassengerAction,removeMasterPassengerAction
    } from '../../actions/master/actionsMaster';

import {addAirBagAction,removeAirBagAction,
    changeAirInsuranceAction,
    addMealAction,
    changeFlexibleTicketAction,changeBlueRibbonAction} from '../../actions/master/actionsAir';

import {selectCabinAction} from '../../actions/master/actionsShip';

import MasterContact from './Passengers/MasterContact';
import MasterPayment from './Payment/MasterPayment';
import CabinSelection from '../Ship/CabinSelection';




class MasterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentWillMount() {
        console.log('PROPS ' + this.props.product);
        this.props.firstLoad();

    }

    render() {
        console.log('Master App Render ' + this.props.product);
        const routeTripData = (this.props.product == 'air')  ? this.props.tripData : this.props.shipTripData;

        return (
            <div className='busApp'>
                <div className='row'>

                    <div className='col-md-8'>

                    <ItineraryData   product={this.props.product}
                                    tripData={routeTripData}/>

                        <MasterPassengerList
                            product={this.props.product}
                            addPaxHandler={this.props.addPaxHandler}
                            removePaxHandler={this.props.removePaxHandler}
                            editPaxHandler={this.props.editPaxHandler}
                            editNameHandler={this.props.editPaxNameHandler}
                            addBagHandler={this.props.addBagHandler}
                            removeBagHandler={this.props.removeBagHandler}
                            addMealHandler={this.props.addMealHandler}
                            selectInsuranceHandler={this.props.selectInsuranceHandler}
                            changeFlexibleTicketHandler={this.props.changeFlexibleTicketHandler}
                            changeBlueRibbonHandler={this.props.changeBlueRibbonHandler}
                            passengers={this.props.passengers}
                            currency={this.props.currency}
                            insurances={this.props.insuranceAir}
                            bagsAir={this.props.bagsAir}
                            purchasedBags={this.props.purchasedBags}
                            mealOptions={this.props.mealOptions}
                            boughtMeals={this.props.boughtMeals}
                            segments={this.props.segments}
                            hasFlexibleTicket={this.props.hasFlexibleTicket}
                            flexibleTicket={this.props.flexibleTicket}
                            hasBlueRibbon={this.props.hasBlueRibbon}
                            blueRibbonPrices={this.props.blueRibbonPrices}/>


                    </div>

                    <div className='col-md-3'>
                        <MasterSideBar currency={this.props.currency}
                                       bagAllowance={this.props.bagsAir}
                                       passengers={this.props.passengers}
                                       purchasedBags={this.props.purchasedBags}
                                       boughtInsurances={this.props.boughtInsurances}
                                       insuranceOptions={this.props.insuranceOptions}
                                       mealOptions={this.props.mealOptions}
                                       boughtMeals={this.props.boughtMeals}
                                       pricing={this.props.pricing}
                                       hasFlexibleTicket={this.props.hasFlexibleTicket}
                                       flexibleTicket={this.props.flexibleTicket}
                                       hasBlueRibbon={this.props.hasBlueRibbon}
                                       blueRibbonPrices={this.props.blueRibbonPrices}/>
                    </div>
                </div>

                { this.props.product === 'ship' &&
                    <div className='row'>
                        <div className='col-md-8'>
                            <CabinSelection
                                selectCabinHandler={this.props.selectCabinHandler}
                                tripData={routeTripData}
                                passengers={this.props.passengers}
                                cabins={this.props.cabins}
                            />
                        </div>
                    </div>
                }


                <div className='row'>
                    <div className='col-md-8'>
                        <MasterContact contact={this.props.contact}
                                    editContactHandler={this.props.editContactHandler}/>
                    </div>
                </div>




                <div className='row'>
                    <div className='col-md-8'>
                        <MasterPayment paymentMethods={this.props.paymentMethods}/>
                    </div>
                </div>
                


                </div>

        );
    }
}

function mapStateToProps(state) {
    console.log('master app');
    console.log(state);

    return {
        passengers: state.passengersMasterReducer,
        currency: state.currentCurrencyReducer,
        pricing:  {
            total: state.pricingMasterReducer,
            analysis: state.pricingMasterAnalysisReducer
        },
        contact: state.contactMasterReducer,
        insuranceAir: state.airInsuranceReducer,
        bagsAir : state.getBagsReducer,
        purchasedBags: state.purchasedBagsReducer,
        boughtInsurances: state.purchasedInsuranceReducer,
        insuranceOptions: state.airInsuranceReducer,
        mealOptions: state.getMealsReducer,
        boughtMeals: state.purchasedMealsReducer,
        segments:state.getLegsReducer,
        tripData:state.airTripReducer,
        shipSegments:state.getShipLegsReducer,
        shipTripData:state.shipTripReducer,
        paymentMethods:state.paymentMethodsReducer,
        hasFlexibleTicket:state.hasFlexibleTicketReducer,
        flexibleTicket:state.flexibleTicketReducer,
        hasBlueRibbon: state.hasBlueRibbonReducer,
        blueRibbonPrices: state.getBlueRibbonReducer,
        cabins:state.cabinsReducer,
        cabinSelection:state.cabinSelectionReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPaxHandler: addMasterPassengerAction,
        removePaxHandler:removeMasterPassengerAction,
        editPaxHandler:changeMasterPassengerAction,
        firstLoad: firstLoadMasterAction,
        editPaxNameHandler: editMasterPassengerNameAction,
        editContactHandler: editMasterContactAction,
        addBagHandler: addAirBagAction,
        removeBagHandler:removeAirBagAction,
        selectInsuranceHandler:changeAirInsuranceAction,
        addMealHandler:addMealAction,
        changeFlexibleTicketHandler:changeFlexibleTicketAction,
        changeBlueRibbonHandler:changeBlueRibbonAction,
        selectCabinHandler:selectCabinAction
    }, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps )(MasterApp);


