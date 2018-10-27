
const uniqueCarriers = [
    {code:'OA',name:'Olympic Air'},
    {code:'AF',name:'Air France'},
    {code:'FR',name:'Ryanair'}
    ];

const legs = [
    {
        id:0,
        from:'Rhodes',
        to:'Athens',
        legId: 0,
        carrier: 'OA'
    },
    {
        id:1,
        from:'Athens',
        to:'Dublin',
        legId: 0,
        carrier: 'AF'
    },
    {
        id:2,
        from:'Dublin',
        to:'Rhodes',
        legId: 1,
        carrier: 'FR'
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
        to: {
            iata: 'LHR',
            city:'London',
            name:'Heathrow Arpt',
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
                    iata: 'RHO',
                    city:'Rhodes',
                    name:'Diagoras Arpt',
                    flyTime: '10:00',
                    flyTimeGMT: '10:00',
                    day:'Tues',
                    date:'15/06/2018'
                },
                to: {
                    iata: 'ATH',
                    city:'Athens',
                    name:'Venizelos Arpt',
                    flyTime: '10:00',
                    flyTimeGMT: '10:00',
                    day:'Tues',
                    date:'15/06/2018'
                },
                airline: "OA,OlympicAir",
                img: {
                    url: "/logos/OA.jpg",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            },
            {
                segId:2,
                from: {
                    iata: 'ATH',
                    city:'Athens',
                    name:'Venizelos Arpt',
                    flyTime: '10:00',
                    flyTimeGMT: '10:00',
                    day:'Tues',
                    date:'15/06/2018'
                },
                to: {
                    iata: 'LHR',
                    city:'London',
                    name:'Heathrow Arpt',
                    flyTime: '09:00',
                    flyTimeGMT: '09:00',
                    day:'Tues',
                    date:'22/06/2018'
                },
                airline: "AF,AirFrance",
                img: {
                    url: "/logos/AF.png",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            }
        ]
    },
    {
        id:1,
        legId:1,
        from:  {
            iata: 'LHR',
            city:'London',
            name:'Heathrow Arpt',
            flyTime: '09:00',
            flyTimeGMT: '09:00',
            day:'Tues',
            date:'22/06/2018'
        },
        to: {
            iata: 'RHO',
            city:'Rhodes',
            name:'Diagoras Arpt',
            flyTime: '13:00',
            flyTimeGMT: '14:00',
            day:'Tues',
            date:'22/06/2018'
        },
        stops:0,
        duration : {
            h:2,
            m: 45
        },
        waiting : {
            total:0,
            h:0,
            m: 0
        },
        segments: [
            {
                segId:1,
                from: {
                    iata: 'LHR',
                    city:'London',
                    name:'Heathrow Arpt',
                    flyTime: '09:00',
                    flyTimeGMT: '09:00',
                    day:'Tues',
                    date:'22/06/2018'
                },
                to: {
                    iata: 'RHO',
                    city:'Rhodes',
                    name:'Diagoras Arpt',
                    flyTime: '10:00',
                    flyTimeGMT: '10:00',
                    day:'Tues',
                    date:'15/06/2018'
                },
                airline: "FR,Ryanair",
                img: {
                    url: "/logos/FR.png",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            }
        ]

    }
];



export function airTripReducer(state = trip, action) {
    return state;
}



export function getLegsReducer(state = legs, action) {
    return state;
}


export function uniqueCarriersReducer(state = uniqueCarriers, action) {
    return state;
}
