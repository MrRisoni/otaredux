const expect = require('chai').expect;

import {passengersBusReducer} from '../../reducers/bus/passengersBus';
import {ADD_PASSENGER_BUS} from '../../actions/bus/actionsBus';


describe('Passengers Bus Reducer', () => {
    it('Should add a passenger', () => {

        const initState =  [
            {
                id: 0,
                type: 'ADT',
                reducedTicketPriceEuro: 35,
                ticketPriceEuro: 45,
                name: 'Leo',
                surname:'Tolstoy'
            }
        ];


        expect(passengersBusReducer(initState, {type:ADD_PASSENGER_BUS}).length).to.equal(2);
    });
});