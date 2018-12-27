import * as MasterCons from '../../actions/master/allConstants';


const preSeatSelectedItems = {
  selectedSegment: 1,
  selectedPaxId: 0,
};

const seatSelection = [
  {
    paxId: 0,
    seatList: [{ segId: 0, seatNo: '' }, { segId: 1, seatNo: '' }, { segId: 2, seatNo: '' }],
  },
];


const seatMapInfo = [
  {
    segId: 1,
    taken: ['A1', 'B1', 'E2', 'E16'],
    allowedCabins: ['Y', 'W', 'C', 'F'],
    firstClassLimit: 11,
    airplaneRows: 55,

  },
  {
    segId: 2,
    taken: ['A1', 'B1', 'E2', 'E16'],
    allowedCabins: ['W'],
    firstClassLimit: 11,
    airplaneRows: 22,

  },
];


export function preSeatSelectedItemsReducer(state = preSeatSelectedItems) {
  return state;
}

export function seatMapInfoReducer(state = seatMapInfo) {
  return state;
}


export function fetchSeatSelectionReducer(state = seatSelection, action) {
  switch (action.type) {
    case MasterCons.ADD_PASSENGER_MASTER:

      const nextPaxId = state.length;
      console.log('fetchCabinPaxPerSegment');

      return [
        ...state,

        {
          paxId: nextPaxId,
          seatList: [{ segId: 0, seatNo: '' }, { segId: 1, seatNo: '' }, { segId: 2, seatNo: '' }],
        },
      ];
    case MasterCons.CHANGE_PASSENGER_MASTER:
      // reset seats
    default:
      return state;
  }
}


export function fetchPreseatSelectedPaxReducer(state = preSeatSelectedItems, action) {
  switch (action.type) {
    case MasterCons.CHANGE_PRESEAT_SELECT_PAX:
      console.log('state befoar');
      console.log(state);
      return action.payload.paxId;
    default:
      return state;
  }
}
