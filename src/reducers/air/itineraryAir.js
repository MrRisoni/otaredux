


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

const trip = [
    {
        id:0,
        legId:0,
        from: {
            iata: 'RHO',
            city:'Rhodes',
            name:'Diagoras Arpt',
            flyTime: '10:00',
            flyTimeGMT: '10:00',
            day:'Tues',
            date:'15/06/2018'
        },
        stops:1,
        duration : {
            h:3,
            m: 45
        },
        waiting : {
            h:2,
            m: 10
        }

    }
];



const segments = [
    {
        id:0,
        legId:0,
        depAirport:'RHo'
    }
];


export function airTripReducer(state = trip, action) {
    return state;
}



export function getLegsReducer(state = legs, action) {
    return state;
}
