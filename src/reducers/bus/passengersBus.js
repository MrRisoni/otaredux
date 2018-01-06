import {ADD_PASSENGER_BUS} from '../../actions/bus/actionsBus';


const passengers = [
    {
        id: 0,
        type: 'ADT',
        ticketPriceEuro: 45
    }
];



export function passengersBusReducer(state = passengers, action) {
    console.log('passengers BusApp reducer');
    console.log(action.type);
    switch (action.type) {
        case ADD_PASSENGER_BUS:

            return [
                ...state,
                {
                    id: state.length,
                    type: 'ADT',
                    ticketPriceEuro: 45
                }
            ];
        default:
            return state
    }
}

