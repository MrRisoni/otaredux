import {FETCH_COUNTRIES_FINISHED} from '../../actions/master/asyncActions';

const asyncData = {
    countries: []
};



export function countryListReducer(state= asyncData, action) {



    switch (action.type) {
        case FETCH_COUNTRIES_FINISHED:
            console.log('fetched countries ');
            console.log(action.payload);

            return { ...state, countries: action.payload };


        default:
            return state;
    }
}
