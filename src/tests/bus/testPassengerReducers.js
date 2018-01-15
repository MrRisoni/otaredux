const expect = require('chai').expect;

import {passengersBusReducer} from '../../reducers/bus/passengersBus';
import {ADD_PASSENGER_BUS} from '../../actions/bus/actionsBus';


describe('Passengers Bus Reducer', () => {
    it('Should add a passenger', () => {

        const initState =  [
            {
                id: 0,
                humanId:1,
                active:true,
                type: 'ADT',
                name: '',
                surname:''
            }
        ];


        expect(passengersBusReducer(initState, {type:ADD_PASSENGER_BUS}).length).to.equal(2);
    });
});