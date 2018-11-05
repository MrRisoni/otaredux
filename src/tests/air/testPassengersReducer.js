const expect = require('chai').expect;

import {passengersBusReducer} from '../../reducers/master/passengersMaster';
import {ADD_PASSENGER_BUS} from '../../actions/master/actionsAir';


describe('Passengers Air  Reducer', () => {
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


    it('Double cost', () => {

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