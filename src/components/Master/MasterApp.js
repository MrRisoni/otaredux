import React, {Component} from 'react';

import MasterPassengerList from './Passengers/MasterPassengerList';
import MasterSideBar from './MasterSideBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FontAwesome from 'react-fontawesome';
import {addMasterPassengerAction,firstLoadMasterAction,editMasterPassengerNameAction,editMasterContactAction,
    changeMasterPassengerAction,removeMasterPassengerAction} from '../../actions/master/actionsMaster';
import MasterContact from './Passengers/MasterContact';
import MasterPayment from './MasterPayment';
import {contactMasterReducer} from "../../reducers/master/passengersMaster";



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
                            passengers={this.props.passengers}
                            insurances={this.props.insuranceAir}/>
                    </div>

                    <div className='col-md-3'>
                        <MasterSideBar currency={this.props.currency}
                                    pricing={this.props.pricing}/>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-md-8'>
                        <MasterContact contact={this.props.contact}
                                    editContactHandler={this.props.editContactHandler}/>
                    </div>
                </div>


                {this.props.product !== 'air' &&
                    <div className='row'>
                        <div className='col-md-8'>
                            <MasterPayment/>
                        </div>
                    </div>
                }

                {this.props.product === 'air' &&
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <button className="btn btn-success btn-lg">Continue</button>
                    </div>
                </div>
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log('App Component: map state to props');
    console.log(state);
    return {
        passengers: state.passengersMasterReducer,
        currency: state.currentCurrencyReducer,
        pricing:  {
            total: state.pricingMasterReducer,
            analysis: state.pricingMasterAnalysisReducer
        },
        contact: state.contactMasterReducer,
        insuranceAir: state.airInsuranceReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPaxHandler: addMasterPassengerAction,
        removePaxHandler:removeMasterPassengerAction,
        editPaxHandler:changeMasterPassengerAction,
        firstLoad: firstLoadMasterAction,
        editPaxNameHandler: editMasterPassengerNameAction,
        editContactHandler: editMasterContactAction
    }, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps )(MasterApp);


