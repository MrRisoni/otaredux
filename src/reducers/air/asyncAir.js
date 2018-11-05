import {FETCH_COUNTRIES_FINISHED, FETCH_SEATMAP_FINISHED} from '../../actions/master/asyncActions';
import {SELECT_AIR_SEAT} from "../../actions/master/actionsAir";




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
        case SELECT_AIR_SEAT:
            //changes free to true
            console.log('SELECT_AIR_SEAT');
            console.log(action.payload);
            let oldSeatCode = action.payload.oldLetter + action.payload.oldNumber;
            let newSeatCode = action.payload.letter + action.payload.number;

            console.log('oldSeatCode '  + oldSeatCode);
            console.log('oldSeatCode '  + newSeatCode);

            let newSeatMap = state.seatMap;
            newSeatMap.map( (seatItem,idx) => {
                if (seatItem.code === oldSeatCode) {
                    console.log('Bingo!!!');
                    let newSeatItem = seatItem;
                    newSeatItem.free = true;
                    console.log(newSeatItem);
                    return {
                        ...seatItem,
                        newSeatItem
                    }
                }
                else if  (seatItem.code === newSeatCode){
                    console.log('Bingo!!!');
                    let newSeatItem = seatItem;
                    newSeatItem.free = false;
                    console.log(newSeatItem);
                    return {
                        ...seatItem,
                        newSeatItem
                    }
                }
                else {
                    return seatItem;
                }
            });
            return { ...state, seatMap: newSeatMap };

        default:
            return state;
    }
}
