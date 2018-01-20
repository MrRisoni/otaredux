import {ADD_PASSENGER_BUS,REMOVE_PASSENGER_BUS,CHANGE_PASSENGER_BUS} from '../../actions/bus/actionsBus';
import update from 'immutability-helper';


const passengers = [
    {
        id: 0,
        humanId:1,
        active:true,
        type: 'ADT',
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
                    name: '',
                    surname:''
                }
            ];
        case REMOVE_PASSENGER_BUS:
            console.log('remove pax');
            console.log(action.payload);

            const newPaxes = [...state];

            const paxIdRemoval = action.payload.passengerId;

            // reorder human ids
            let newHumanId =1;

            newPaxes.forEach( (pax) => {
                if (pax.id == paxIdRemoval) {
                    pax.active = false;
                }

                if (pax.active) {
                    pax.humanId = newHumanId;
                    newHumanId++;
                }
            });
            console.log(newPaxes);

            //return update(state, {$set: newPaxes});
            return newPaxes;
        case CHANGE_PASSENGER_BUS:
            console.log(action.payload);
            return state.map( (pax, index) => {
               if (index == action.payload.passengerId) {
                   let newPax = pax;
                   newPax.type = action.payload.newType;
                   return {
                       ...pax,
                       ...newPax
                   }
               }
               else {
                   return pax;
               }
            });

        default:
            return state
    }
}

