


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
            iata: 'PIR',
            city:'',
            name:'Pireaus',
            flyTime: '10:00',
            flyTimeGMT: '10:00',
            day:'Tues',
            date:'15/06/2018'
        },
        to: {
            iata: 'RHO',
            city:'',
            name:'Rhodes',
            flyTime: '20:00',
            flyTimeGMT: '20:00',
            day:'Tues',
            date:'15/06/2018'
        },
        stops:1,
        duration : {
            h:5,
            m: 35
        },
        waiting : {
            total:130,
            h:2,
            m: 10
        },
        segments: [
            {
                segId:1,
                from: {
                    iata: 'PIR',
                    city:'',
                    name:'Pireaus',
                    flyTime: '10:00',
                    flyTimeGMT: '10:00',
                    day:'Tues',
                    date:'15/06/2018'
                },
                to: {
                    iata: 'NAX',
                    city:'',
                    name:'Naxos',
                    flyTime: '10:00',
                    flyTimeGMT: '10:00',
                    day:'Tues',
                    date:'15/06/2018'
                },
                airline: "OA,OlympicAir",
                img: {
                    url: "/logos/BSF.png",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            },
            {
                segId:2,
                from: {
                    iata: 'NAX',
                    city:'',
                    name:'Naxos',
                    flyTime: '10:00',
                    flyTimeGMT: '10:00',
                    day:'Tues',
                    date:'15/06/2018'
                },
                to: {
                    iata: 'RHO',
                    city:'',
                    name:'Rhodes',
                    flyTime: '09:00',
                    flyTimeGMT: '09:00',
                    day:'Tues',
                    date:'22/06/2018'
                },
                airline: "AF,AirFrance",
                img: {
                    url: "/logos/BSF.png",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            }
        ]
    }
];



export function shipTripReducer(state = trip, action) {
    return state;
}



export function getShipLegsReducer(state = legs, action) {
    return state;
}
