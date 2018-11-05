import * as MasterCons from '../../actions/master/allConstants';


const selection = [
    {
        paxId:0,
        cabin:''
    }
];


export function cabinSelectionReducer(state = selection, action) {

    switch (action.type) {
        case MasterCons.ADD_PASSENGER_MASTER:
            console.log('cabinSelectionReducer');
            console.log(state);
            return [
                ...state,
                {
                    id: state.length,
                    cabin: '',
                }];
        default:
            return state;
    }

}