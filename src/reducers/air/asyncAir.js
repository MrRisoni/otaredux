import {FETCH_COUNTRIES_FINISHED, FETCH_SEATMAP_FINISHED} from '../../actions/master/asyncActions';




const asyncData = {
    countries: [],
    seatMap:[]
};

const fetchedSeatMap = false;

export function seatMapOKReducer(state= fetchedSeatMap, action) {
    switch (action.type) {
        case FETCH_SEATMAP_FINISHED:
            return true;
        default:
            return state;
    }
}

export function countryListReducer(state= asyncData, action) {



    switch (action.type) {
        case FETCH_COUNTRIES_FINISHED:
            return { ...state, countries: action.payload };
        case FETCH_SEATMAP_FINISHED:
            return { ...state, seatMap: action.payload };

        default:
            return state;
    }
}
