import {ADD_PASSENGER} from '../../actions/air/airActions';


const passengers = [
    {
        id: 0,
        type: 'ADT',
        ticketPriceEuro: 45
    }
];



export function passengersAirReducer(state = passengers, action) {
    console.log('passengers reducer');
    console.log(action.type);
    switch (action.type) {
        case ADD_PASSENGER:

            return [
                ...state,
                {
                    id: state.length,
                    type: 'ADT',
                    ticketPriceEuro: 45
                }
            ];
            break;
        default:
            return state
    }
}

