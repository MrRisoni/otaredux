import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {pricingReducer} from "./reducers/air/pricingAir";
import {changeCurrencyAction, firstLoadAction, addPassengerAction} from './actions/air/airActions';




class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.addPax = this.addPax.bind(this);

    }

    addPax(ev)
    {
        this.props.addPaxHandler();
    }

    componentWillMount()
    {
        this.props.firstLoad();
    }
    handleChange(ev)
    {
        console.log('New Currency ' + ev.target.value);
        this.props.changeCurrencyHandler(ev.target.value);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    {this.props.currency.code}
                </p>


                <select className="form-control" onChange={this.handleChange}>
                    {this.props.currencies.map((cur) => {
                        return (<option key={cur.code} value={cur.code}>{cur.code}</option>)
                    })}

                </select>


                {this.props.passengers.map((pax) => {
                    return (<div key={pax.od}>{pax.type}</div>)
                })}


                <button onClick={this.addPax}>Add Passenger</button>
                Total Price {this.props.pricing}
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log('App Component: map state to props');
    console.log(state);

    return {
        passengers: state.passengersReducer,
        currency: state.currentCurrencyReducer,
        currencies: state.getCurrenciesReducer,
        pricing: state.pricingReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeCurrencyHandler: changeCurrencyAction,
        firstLoad: firstLoadAction,
        addPaxHandler:addPassengerAction,
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(App);