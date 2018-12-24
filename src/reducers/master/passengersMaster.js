

import * as MasterCons from '../../actions/master/allConstants';


import {SELECT_AIR_SEAT}  from '../../actions/master/actionsAir';
import {CHANGE_PRESEAT_SELECT_PAX} from "../../actions/master/preseatActions";



const preseatSelectedPaxId =0;

const cabinPaxSelection = [
    {
        paxId:0,
        cabinList:[{segId:0,cabin:'Y'},{segId:1,cabin:'Y'},{segId:2,cabin:'Y'}],
    }
]

const seatSelection = [
    {
        paxId:0,
        seatList:[{segId:0,seatNo:''},{segId:1,seatNo:''},{segId:2,seatNo:''}],
    }
]


const passengers = [
    {
        id: 0,
        humanId:1,
        active:true,
        type: 'ADT',
        cabinClass: 'Y',
        name: '',
        surname:'',
        gender:'',
        dob:'',
        milesCard: { company:'',cardNo: ''},
        passport: {
            issueCountry:'',
            nationality:'',
            expiresAt:'',
            passNo:''
        }
    }
];




const contactData = { surname : 'FOO',
                    name:'BAR',
                    changed:false,
                    gender:'',
                    prefix:'',
                    mobile:'',
                    email:'',
                    country:'',
                    city:'',
                    address:'',
                    postcode:''};


export function fetchCabinPaxPerSegmentReducer(state = cabinPaxSelection, action) {

    switch (action.type) {
        case MasterCons.ADD_PASSENGER_MASTER:

            const nextPaxId = cabinPaxSelection.length;
            console.log('fetchCabinPaxPerSegment');

            return [
                ...state,

                {
                    paxId: nextPaxId,
                    cabinList: [{segId: 0, cabin: 'Y'}, {segId: 1, cabin: 'Y'}, {segId: 2, cabin: 'Y'}],
                }
            ]
        default:
            return state;
    }
}

export function fetchPreseatSelectedPaxReducer(state =preseatSelectedPaxId, action){
    switch (action.type) {
        case CHANGE_PRESEAT_SELECT_PAX:
            console.log('state befoar');
            console.log(state);
            return action.payload.paxId;
        default:
            return state;
    }
}


export function contactMasterReducer(state = contactData, action) {
    let firstActivePax =   { surname : 'KTO', name:''};

   switch (action.type) {
        case MasterCons.EDITED_NAME_PASSENGER_MASTER:
        case MasterCons.PASSENGER_ARRAY_CHANGED:
            console.log(action.payload.passengers);
            if (!contactData.changed) {
                firstActivePax = getFirstActivePax(action.payload.passengers);
                return Object.assign({}, state, {
                    surname: firstActivePax.surname,
                    name: firstActivePax.name
                });
            }
            else {
                return state;
            }
       case MasterCons.EDIT_CONTACT_PASSENGER_MASTER:
       // { key action.payload.key}
            return Object.assign({}, state, {
                surname: action.payload.surname,
                name:  action.payload.name,
                changed: true,
                gender: action.payload.gender,
                prefix: action.payload.prefix,
                mobile:action.payload.mobile,
                email: action.payload.email,
                country:action.payload.country,
                city: action.payload.city,
                address:action.payload.address,
                postcode:action.payload.postcode
            });
       default:
            return contactData;
    }
}

function getFirstActivePax(passengers) {
    // get first adult
    let firstActivePax =  { surname : '', name:''};
    let maxId = 50;
    passengers.forEach( pax => {
        if (pax.active && pax.id < maxId && pax.type === 'ADT') { // ADULT PAX
            maxId = pax.id;
            firstActivePax.surname = pax.surname;
            firstActivePax.name = pax.name;

        }
    });
    return firstActivePax;
}

export function passengersMasterReducer(state = passengers, action) {
    console.log('passengers MasterApp reducer');
    console.log(action.type);
    switch (action.type) {
        case MasterCons.ADD_PASSENGER_MASTER:
            let maxHumanId =0;
            state.forEach( pax => {
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
                    cabinClass: 'Y',
                    name: '',
                    surname:'',
                    gender:'',
                    dob:'',
                    milesCard: { company:'',cardNo: ''},
                    passport: {
                        issueCountry:'',
                        nationality:'',
                        expiresAt:'',
                        passNo:''
                    }
                }
            ];
        case MasterCons.REMOVE_PASSENGER_MASTER:
            console.log('remove pax');
            console.log(action.payload);

            let totalRemainActivePaxes = state.filter(px => px.active === true).length;
            console.log('totalRemainActivePaxes ' + totalRemainActivePaxes);
            totalRemainActivePaxes--;
            if (totalRemainActivePaxes >0) {

                const newPaxes = [...state];

                const paxIdRemoval = action.payload.passengerId;

                 // reorder human ids
                let newHumanId =1;

                newPaxes.forEach( pax => {
                    if (pax.id == paxIdRemoval) {
                        pax.active = false;
                    }

                    if (pax.active) {
                        pax.humanId = newHumanId;
                        newHumanId++;
                    }
                });
                console.log(newPaxes);
                return newPaxes;
            }
            else {
                return state;
            }

        case   SELECT_AIR_SEAT:

            return state.map( (pax, index) => {
                if (index == action.payload.paxId) {
                    let newPax = pax;
                    newPax.seat = {letter:action.payload.letter,number:action.payload.number};
                    return {
                        ...pax,
                        ...newPax
                    }
                }
                else {
                    return pax;
                }
            });
        case MasterCons.CHANGE_PASSENGER_MASTER:
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
        case MasterCons.CHANGE_PASSENGER_AIR_CABIN:
            console.log(action.payload);
            return state.map( (pax, index) => {
                if (index == action.payload.passengerId) {
                    let newPax = pax;
                    newPax.cabinClass = action.payload.newClass;
                    return {
                        ...pax,
                        ...newPax
                    }
                }
                else {
                    return pax;
                }
            });
        case  MasterCons.EDIT_NAME_PASSENGER_MASTER:
            console.log(action.payload);
            return state.map( (pax, index) => {
                if (index == action.payload.passengerId) {
                    let newPax = pax;
                    newPax.surname = action.payload.surname;
                    newPax.name = action.payload.name;
                    newPax.gender = action.payload.gender;
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







