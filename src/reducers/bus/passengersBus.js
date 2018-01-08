import {ADD_PASSENGER_BUS} from '../../actions/bus/actionsBus';


const passengers = [
    {
        id: 0,
        humanId:1,
        active:true,
        type: 'ADT',
        reducedTicketPriceEuro: 35,
        ticketPriceEuro: 45,
        name: '',
        surname:''
    }
];



export function passengersBusReducer(state = passengers, action) {
    console.log('passengers BusApp reducer');
    console.log(action.type);
    switch (action.type) {
        case ADD_PASSENGER_BUS:
            let maxHumanId =0;
            state.forEach( (pax) => {
               if (pax.active && maxHumanId < pax.humanId) {
                   maxHumanId = pax.humanId;
               }
            });

            maxHumanId++;

            return [
                ...state,
                {
                    id: state.length,
                    humanId:maxHumanId,
                    active:true,
                    type: 'ADT',
                    reducedTicketPriceEuro: 35,
                    ticketPriceEuro: 45,
                    name: '',
                    surname:''
                }
            ];
        default:
            return state
    }
}

