import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);

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
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(App);