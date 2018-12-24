import * as MasterCons from "../../actions/master/allConstants";

const cabinPaxSelection = [
    {
        paxId:0,
        segId:0,
        cabin:'Y'
    },
    {
        paxId:0,
        segId:1,
        cabin:'Y'
    },
    {
        paxId:0,
        segId:2,
        cabin:'Y'
    }
]





export function fetchCabinPaxPerSegmentReducer(state = cabinPaxSelection, action) {

    switch (action.type) {
        case 'CHANGE_AIR_CABIN':
            state.map(cbpx => {
                if (cbpx !== action.payload.paxId) {
                    return cbpx;
                }
                else {
                    cbpx.cabinList.map(cab => {
                        if (cab.segId != action.payload.segId) {
                            return cab;
                        }
                        else {

                            return {
                                ...cab,
                                cabin : action.payload.newClass
                            }


                        }
                    })
                }
            })
            break;
        case MasterCons.ADD_PASSENGER_MASTER:

            const nextPaxId = cabinPaxSelection.length;
            console.log('fetchCabinPaxPerSegment');

            return [
                ...state,

                {
                    paxId: nextPaxId,
                    cabinList: [{segId: 0, cabin: 'Y'}, {segId: 1, cabin: 'Y'}, {segId: 2, cabin: 'Y'}],
                }
            ];
        case MasterCons.CHANGE_PASSENGER_MASTER:
            // reset seats
            return state.map( (px,idx) => {
                if (px.paxId !==  action.payload.passengerId) {
                    return px;
                }
                else {
                    return {
                        ...px,
                        cabinList: [{segId: 0, cabin: 'Y'}, {segId: 1, cabin: 'Y'}, {segId: 2, cabin: 'Y'}]
                    }


                }
            })
        default:
            return state;
    }
}
