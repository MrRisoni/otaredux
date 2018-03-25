import React, {Component} from 'react';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './MasterSideBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addMasterPassengerAction,firstLoadMasterAction,editMasterPassengerNameAction,editMasterContactAction,
    changeMasterPassengerAction,removeMasterPassengerAction
    } from '../../actions/master/actionsMaster';

import {addAirBagAction,removeAirBagAction,
    changeAirInsuranceAction,
    addMealAction,
    changeFlexibleTicketAction,changeBlueRibbonAction} from '../../actions/master/actionsAir';
import MasterContact from './Passengers/MasterContact';
import MasterPayment from './Payment/MasterPayment';




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
        return (
            <div className='busApp'>
                <div className='row'>

                    <div className='col-md-8'>

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


                <div className='row'>
                    <div className='col-md-8'>
                        <MasterContact contact={this.props.contact}
                                    editContactHandler={this.props.editContactHandler}/>
                    </div>
                </div>

                {this.props.product === 'air' &&
                    <div className='row'>
                        <div className='col-md-8'>
                            <MasterPayment paymentMethods={this.props.paymentMethods}/>
                        </div>
                    </div>
                }


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
        segments:state.airSegmentsReducer,
        paymentMethods:state.paymentMethodsReducer,
        hasFlexibleTicket:state.hasFlexibleTicketReducer,
        flexibleTicket:state.flexibleTicketReducer,
        hasBlueRibbon: state.hasBlueRibbonReducer,
        blueRibbonPrices: state.getBlueRibbonReducer,
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
        changeBlueRibbonHandler:changeBlueRibbonAction
    }, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps )(MasterApp);


