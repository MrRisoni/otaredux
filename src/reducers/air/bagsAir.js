import {ADD_PASSENGER} from '../../actions/air/airActions';


const bags = [
    {
        id: 0,
        type: 'ADT',
        price: 5.00
    }
];



export function bagsReducer(state = bags, action) {
    console.log('bagsReducer');
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

