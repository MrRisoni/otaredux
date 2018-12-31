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
      return state.map((cbpx) => {
        const diffPax = (cbpx.paxId !== action.payload.paxId);
        const samePaxDiffSeg = (cbpx.paxId === action.payload.paxId) && (cbpx.segId !== action.payload.segmentId);
        const returnSame = (diffPax === true) || (samePaxDiffSeg === true);

        if (returnSame) {
          return cbpx;
        }
        return {
          ...cbpx,
          cabin: action.payload.newClass,
        };
      });
    case MasterCons.ADD_PASSENGER_MASTER:

      const nextPaxId = parseInt(state.length / 3); // we have as many records as segments


      return [
        ...state,
        {
          paxId: nextPaxId,
          segId: 0,
          cabin: 'Y',
        },
        {
          paxId: nextPaxId,
          segId: 1,
          cabin: 'Y',
        },
        {
          paxId: nextPaxId,
          segId: 2,
          cabin: 'Y',

        },
      ];
    default:
      return state;
  }
}
