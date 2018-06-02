import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header";

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="DefaultLayout">
                <div className="Header"><Header/></div>
                <Component {...matchProps} />
            </div>
        )} />
    )
};


export default DefaultLayout;
