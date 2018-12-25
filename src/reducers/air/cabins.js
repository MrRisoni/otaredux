import * as MasterCons from '../../actions/master/allConstants';

const cabinPaxSelection = [
  {
    paxId: 0,
    segId: 0,
    cabin: 'Y',
  },
  {
    paxId: 0,
    segId: 1,
    cabin: 'Y',
  },
  {
    paxId: 0,
    segId: 2,
    cabin: 'Y',
  },
];


export function fetchCabinPaxPerSegmentReducer(state = cabinPaxSelection, action) {
  switch (action.type) {
    case MasterCons.CHANGE_CABIN:
      return state.map(cbpx => {
        const diffPax = (cbpx.paxId !== action.payload.paxId);
        const samePaxDiffSeg = (cbpx.paxId === action.payload.paxId) && (cbpx.segId !== action.payload.segmentId);
        const returnSame = (diffPax === true) || (samePaxDiffSeg === true);

        console.log('returnsame ' + returnSame);
        if (returnSame) {
          return cbpx;
        }
        return {
          ...cbpx,
          cabin: action.payload.newClass,
        };
      });
      console.log('new state');
      console.log(state);
      break;
    case MasterCons.ADD_PASSENGER_MASTER:

      const nextPaxId = state.length;
      console.log('fetchCabinPaxPerSegment');

      return [
        ...state,

        {
          paxId: nextPaxId,
          cabinList: [{ segId: 0, cabin: 'Y' }, { segId: 1, cabin: 'Y' }, { segId: 2, cabin: 'Y' }],
        },
      ];
    default:
      return state;
  }
}
