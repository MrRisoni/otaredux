import {ADD_PASSENGER} from '../actions/index';


const passengers = [
    {
        id: 0,
        type: 'ADT',
        ticketPrice: 45
    }
];



export function passengersReducer(state = passengers, action) {
    console.log('passengers reducer');
    console.log(action.type);
    switch (action.type) {
        case ADD_PASSENGER:

            return [
                ...state,
                {
                    id: state.length,
                    type: 'ADT',
                    ticketPrice: 45
                }
            ];
            break;
        default:
            return state
    }
}

