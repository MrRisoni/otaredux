


const legs = [
    {
        id:0,
        from:'Rhodes',
        to:'Athens',
        legId: 0,
        carrier: 'FR'
    },
    {
        id:1,
        from:'Athens',
        to:'Dublin',
        legId: 0,
        carrier: 'BA'
    },
    {
        id:2,
        from:'Dublin',
        to:'Rhodes',
        legId: 1,
        carrier: 'U2'
    }
];


export function airLegsReducer(state = legs, action) {
    return state;
}
