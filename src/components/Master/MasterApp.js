import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './SideBar/MasterSideBar';
import ItineraryData from './Segments/ItineraryData';


import {
    addMasterPassengerAction, firstLoadMasterAction, editMasterPassengerNameAction, editMasterContactAction,
    changeMasterPassengerAction, removeMasterPassengerAction, changeAirCabinClassPassengerAction,
    changeLanguageAction

} from '../../actions/master/actionsMaster';

import {changePreSeatSelectPassengerAction} from '../../actions/master/preseatActions';
import {
    addAirBagAction, removeAirBagAction,
    changeAirInsuranceAction,
    addMealAction,
    changeFlexibleTicketAction, changeBlueRibbonAction,
    selectAirSeatAction, fetchCountriesAction
} from '../../actions/master/actionsAir';


import MasterContact from './Passengers/MasterContact';
import CreditCard from "./Payment/CreditCard";
import ReceiptOrInvoice from "./Payment/ReceiptOrInvoice";


class MasterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        this.props.fetchCountriesAction();

        this.props.firstLoad();

    }

    render() {

        return (
            <div className='busApp'>
                <div className='row'>

                    <div className='col-8'>

                        <ItineraryData product={this.props.product}
                                       tripData={this.props.tripData}/>

                        <MasterPassengerList
                            tripData={this.props.tripData}
                            product={this.props.product}
                            addPaxHandler={this.props.addPaxHandler}
                            removePaxHandler={this.props.removePaxHandler}
                            editPaxHandler={this.props.editPaxHandler}
                            changePaxCabinClassHandler={this.props.changePaxCabinClassHandler}
                            editNameHandler={this.props.editPaxNameHandler}
                            addBagHandler={this.props.addBagHandler}
                            removeBagHandler={this.props.removeBagHandler}
                            addMealHandler={this.props.addMealHandler}
                            selectInsuranceHandler={this.props.selectInsuranceHandler}
                            changeFlexibleTicketHandler={this.props.changeFlexibleTicketHandler}
                            changeBlueRibbonHandler={this.props.changeBlueRibbonHandler}
                            selectSeatHandler={this.props.selectSeatHandler}
                            changePreSeatSelectPassengerHandler={this.props.changePreSeatSelectPassengerHandler}
                            passengers={this.props.passengers}
                            currency={this.props.currency}
                            insurances={this.props.insuranceAir}
                            carrierList={this.props.carrierList}
                            bagsAir={this.props.bagsAir}
                            purchasedBags={this.props.purchasedBags}
                            mealOptions={this.props.mealOptions}
                            boughtMeals={this.props.boughtMeals}
                            segments={this.props.segments}
                            hasFlexibleTicket={this.props.hasFlexibleTicket}
                            flexibleTicket={this.props.flexibleTicket}
                            hasBlueRibbon={this.props.hasBlueRibbon}
                            blueRibbonPrices={this.props.blueRibbonPrices}
                            countryList={this.props.asyncData.countries}
                            preseatSelectedPax={this.props.preseatSelectedPax}/>


                    </div>

                    <div className='col-4'>
                        <MasterSideBar currency={this.props.currency}
                                       changeLanguageHandler={this.props.changeLanguageHandler}
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
                                       blueRibbonPrices={this.props.blueRibbonPrices}
                        />
                    </div>
                </div>


                <MasterContact contact={this.props.contact}
                               countryList={this.props.asyncData.countries}
                               editContactHandler={this.props.editContactHandler}/>


                <ReceiptOrInvoice countryList={this.props.asyncData.countries}/>
                <CreditCard/>


            </div>

        );

    }
}

function mapStateToProps(state) {
    console.log(state);

    return {
        passengers: state.passengersMasterReducer,
        carrierList: state.uniqueCarriersReducer,
        currency: state.currentCurrencyReducer,
        pricing: {
            total: state.pricingMasterReducer,
            analysis: state.pricingMasterAnalysisReducer
        },
        contact: state.contactMasterReducer,
        insuranceAir: state.airInsuranceReducer,
        bagsAir: state.getBagsReducer,
        purchasedBags: state.purchasedBagsReducer,
        boughtInsurances: state.purchasedInsuranceReducer,
        insuranceOptions: state.airInsuranceReducer,
        mealOptions: state.getMealsReducer,
        boughtMeals: state.purchasedMealsReducer,
        segments: state.getLegsReducer,
        tripData: state.airTripReducer,
        hasFlexibleTicket: state.hasFlexibleTicketReducer,
        flexibleTicket: state.flexibleTicketReducer,
        hasBlueRibbon: state.hasBlueRibbonReducer,
        blueRibbonPrices: state.getBlueRibbonReducer,
        cabins: state.cabinsReducer,
        cabinSelection: state.cabinSelectionReducer,
        asyncData: state.countryListReducer,
        preseatSelectedPax: state.fetchPreseatSelectedPaxReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPaxHandler: addMasterPassengerAction,
        removePaxHandler: removeMasterPassengerAction,
        editPaxHandler: changeMasterPassengerAction,
        changePaxCabinClassHandler: changeAirCabinClassPassengerAction,
        firstLoad: firstLoadMasterAction,
        editPaxNameHandler: editMasterPassengerNameAction,
        editContactHandler: editMasterContactAction,
        addBagHandler: addAirBagAction,
        removeBagHandler: removeAirBagAction,
        selectInsuranceHandler: changeAirInsuranceAction,
        addMealHandler: addMealAction,
        changeFlexibleTicketHandler: changeFlexibleTicketAction,
        changeBlueRibbonHandler: changeBlueRibbonAction,
        selectSeatHandler: selectAirSeatAction,
        changePreSeatSelectPassengerHandler: changePreSeatSelectPassengerAction,
        changeLanguageHandler: changeLanguageAction,
        fetchCountriesAction: fetchCountriesAction
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MasterApp);


