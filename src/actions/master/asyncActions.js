import axios from 'axios';

export const FETCH_COUNTRIES_BEGIN = 'FETCH_COUNTRIES_BEGIN';
export const FETCH_COUNTRIES_FINISHED = 'FETCH_COUNTRIES_FINISHED';


export const FETCH_SEATMAP_BEGIN = 'FETCH_SEATMAP_BEGIN';
export const FETCH_SEATMAP_FINISHED = 'FETCH_SEATMAP_FINISHED';


export function asyncActions() {

    return (dispatch, getState) => {

        axios.get("https://still-brook-75758.herokuapp.com/api/countries")
            .then(resp => {
                dispatch({
                    type: FETCH_COUNTRIES_FINISHED,
                    payload: resp.data

                });
            }).catch(err => {
            console.log('axios err');
        })

    }
}


export function asyncSeatMapFetchAction() {


    return (dispatch, getState) => {

        axios.get("https://still-brook-75758.herokuapp.com/api/seatmap")
            .then(resp => {
                dispatch({
                    type: FETCH_SEATMAP_FINISHED,
                    payload: resp.data.free

                });
            }).catch(err => {
            console.log('axios err');
        })

    }
}