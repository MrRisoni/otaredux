import React, {Component} from 'react';
import Airport from './Airport'


const HOCStation = (Child) => {
    return ({  ...props }) => (
        <Airport {...props}/>
    );
};



export default HOCStation;




