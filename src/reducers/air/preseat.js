const preSeatSelectedItems = {
    selectedSegment:1,
    selectedPaxId:0,
}

const seatMapInfo = [
    {
        segId:0,
        taken:['A1','B1','E2','E16'],
        firstClassLimit: 11,
        airplaneRows:12,
    },
    {
        segId:1,
        taken:['A1','B1','E2','E16'],
        firstClassLimit: 11,
        airplaneRows:55,

    },
    {
        segId:2,
        taken:['A1','B1','E2','E16'],
        firstClassLimit: 11,
        airplaneRows:22,

    }
]


export function preSeatSelectedItemsReducer(state=preSeatSelectedItems) {
    return state;
}

export function seatMapInfoReducer(state = seatMapInfo) {
    return state;
}
