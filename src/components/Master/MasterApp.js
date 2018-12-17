import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './SideBar/MasterSideBar';
import ItineraryData from './Segments/ItineraryData';



import {addMasterPassengerAction,firstLoadMasterAction,editMasterPassengerNameAction,editMasterContactAction,
    changeMasterPassengerAction,removeMasterPassengerAction,changeAirCabinClassPassengerAction

    } from '../../actions/master/actionsMaster';

import {changePreSeatSelectPassengerAction} from '../../actions/master/preseatActions';
import { asyncActions,asyncSeatMapFetchAction} from '../../actions/master/asyncActions';
import {addAirBagAction,removeAirBagAction,
    changeAirInsuranceAction,
    addMealAction,
    changeFlexibleTicketAction,changeBlueRibbonAction,
    selectAirSeatAction} from '../../actions/master/actionsAir';

import {selectCabinAction} from '../../actions/master/actionsShip';

import MasterContact from './Passengers/MasterContact';
import MasterPayment from './Payment/MasterPayment';
import {seatMapOKReducer} from "../../reducers/air/asyncAir";
import {fetchPreseatSelectedPaxReducer} from "../../reducers/master/passengersMaster";




class MasterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentWillMount() {
        this.props.asyncActions();
        this.props.asyncSeatMapFetchAction();

        this.props.firstLoad();

    }

    render() {
        console.log('master app render ');

        if (this.props.asyncData !== undefined) {
            return (
                <div className='busApp'>
                    <div className='row'>

                        <div className='col-md-8'>

                            <ItineraryData product={this.props.product}
                                           tripData={this.props.tripData }/>

                            <MasterPassengerList
                                tripData={this.props.tripData }
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
                                seatMap={this.props.asyncData.seatMap}
                                fetchedSeatMap={this.props.fetchedSeatMap}
                                preseatSelectedPax={this.props.preseatSelectedPax}/>


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
                                           blueRibbonPrices={this.props.blueRibbonPrices}
                            />
                        </div>
                    </div>


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
}

function mapStateToProps(state) {
    console.log(state);

    return {
        passengers: state.passengersMasterReducer,
        carrierList: state.uniqueCarriersReducer,
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
        cabinSelection:state.cabinSelectionReducer,
        asyncData:state.countryListReducer,
        fetchedSeatMap:state.seatMapOKReducer,
        preseatSelectedPax: state.fetchPreseatSelectedPaxReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPaxHandler: addMasterPassengerAction,
        removePaxHandler:removeMasterPassengerAction,
        editPaxHandler:changeMasterPassengerAction,
        changePaxCabinClassHandler:changeAirCabinClassPassengerAction,
        firstLoad: firstLoadMasterAction,
        editPaxNameHandler: editMasterPassengerNameAction,
        editContactHandler: editMasterContactAction,
        addBagHandler: addAirBagAction,
        removeBagHandler:removeAirBagAction,
        selectInsuranceHandler:changeAirInsuranceAction,
        addMealHandler:addMealAction,
        changeFlexibleTicketHandler:changeFlexibleTicketAction,
        changeBlueRibbonHandler:changeBlueRibbonAction,
        selectCabinHandler:selectCabinAction,
        selectSeatHandler:selectAirSeatAction,
        asyncActions:asyncActions,
        asyncSeatMapFetchAction:asyncSeatMapFetchAction,
        changePreSeatSelectPassengerHandler:changePreSeatSelectPassengerAction
    }, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps )(MasterApp);


