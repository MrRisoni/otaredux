import {ADD_PASSENGER} from '../actions/index';


const passengers = [
    {
        id: 0,
        type: 'ADT'
    }
];



export function passengersReducer(state = passengers, action) {
    console.log('fetching reducer');
    console.log(action.type);
    switch (action.type) {
        case ADD_PASSENGER:

            return [
                ...state,
                {
                    id: state.length,
                    type: 'ADT'
                }
            ];
            break;
        default:
            return state
    }
}

