import * as MasterCons from '../../actions/master/allConstants';


const asyncData = {
  countries: [],
};


export function countryListReducer(state = asyncData, action) {
  switch (action.type) {
    case MasterCons.FETCH_COUNTRIES_FINISHED:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
}
