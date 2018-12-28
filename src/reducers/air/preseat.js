import * as MasterCons from '../../actions/master/allConstants';


const preSeatSelectedItems = {
  selectedSegment: 1,
  selectedPaxId: 0,
};


const seatSelection = [
  {
    paxId: 0,
    segId: 0,
    seatNo: '',
  },
  {
    paxId: 0,
    segId: 1,
    seatNo: '',
  },
  {
    paxId: 0,
    segId: 2,
    seatNo: '',
  },

];


const seatMapInfo = [
  {
    segId: 1,
    colLetters: ['A', 'B', 'C', 'D', 'E', 'F'],
    taken: ['A1', 'B1', 'E2', 'E16', 'D15'],
    allowedCabins: ['Y', 'W', 'C', 'F'],
    firstClassLimit: 13,
    airplaneRows: 55,
    prices: [{
      class: 'Y',
      price: 8,
    },
    {
      class: 'W',
      price: 10,
    },
    {
      class: 'F',
      price: 16,
    },
    {
      class: 'C',
      price: 18,
    }],

  },
  {
    segId: 2,
    colLetters: ['A', 'B', 'C', 'D'],
    taken: ['A1', 'B1', 'E2', 'E16'],
    allowedCabins: ['W'],
    firstClassLimit: 8,
    airplaneRows: 22,
    prices: [
      {
        class: 'W',
        price: 10,
      }],

  },
];


export function seatMapInfoReducer(state = seatMapInfo) {
  return state;
}


export function fetchSeatSelectionReducer(state = seatSelection, action) {
  switch (action.type) {
    case MasterCons.RESET_SEATS:
      return state.map(itm => ({
        ...itm,
        seatNo: '',
      }));
    case MasterCons.PICK_SEAT_NO:
      console.log('MasterCons.PICK_SEAT_NO:');
      console.log(action.payload);
      return state.map((itm) => {
        if ((itm.paxId == action.payload.paxId) && (itm.segId == action.payload.segId)) {
          return {
            ...itm,
            seatNo: action.payload.seatNo,
          };
        }
        return itm;
      });
    case MasterCons.ADD_PASSENGER_MASTER:

      const nextPaxId = parseInt(state.length / 3); // we have as many records as segments
      console.log('fetchCabinPaxPerSegment');

      return [
        ...state,

        {
          paxId: nextPaxId,
          segId: 0,
          seatNo: '',
        },
        {
          paxId: nextPaxId,
          segId: 1,
          seatNo: '',
        },
        {
          paxId: nextPaxId,
          segId: 2,
          seatNo: '',
        },
      ];
    case MasterCons.CHANGE_PASSENGER_MASTER:
    case MasterCons.CHANGE_CABIN:
      // reset seats for this segment
        console.log('  case MasterCons.CHANGE_CABIN:');
        console.log(action.payload)
      return state.map((itm) => {
        const returnDiff = ((itm.paxId === action.payload.paxId) && (itm.segId === action.payload.segmentId));

        if (returnDiff === true) {
          return {
            ...itm,
            seatNo: '',
          };
        }
        return itm;
      });

    default:
      return state;
  }
}


export function fetchPreseatSelectedPaxReducer(state = preSeatSelectedItems, action) {
  switch (action.type) {
    case MasterCons.PICK_PAX_AND_SEG_FOR_PRESEAT:
      console.log('state befoar');
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        selectedSegment: action.payload.segId,
        selectedPaxId: action.payload.paxId,
      };
    default:
      return state;
  }
}
