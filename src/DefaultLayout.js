import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="DefaultLayout">
        <header>
          <div className="Header"><Header /></div>
        </header>
        <main>
          <Component {...matchProps} />
        </main>
        <footer>
          <div className="Header"><Header /></div>
        </footer>
      </div>
    )}
  />
);


export default DefaultLayout;
