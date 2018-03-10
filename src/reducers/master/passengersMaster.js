import {ADD_PASSENGER_MASTER,REMOVE_PASSENGER_MASTER,CHANGE_PASSENGER_MASTER,
    EDIT_CONTACT_PASSENGER_MASTER,
    EDITED_NAME_PASSENGER_MASTER, EDIT_NAME_PASSENGER_MASTER,
    PASSENGER_ARRAY_CHANGED} from '../../actions/master/actionsMaster';

import {ADD_BAG_AIR}  from '../../actions/master/actionsAir';

import update from 'immutability-helper';

const passengers = [
    {
        id: 0,
        humanId:1,
        active:true,
        type: 'ADT',
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
        },
        bags: [
            {
                bagId: 1,
                legId: 0
            }
        ],
        insuranceAir:0
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


export function contactMasterReducer(state = contactData, action) {
    let firstActivePax =   { surname : 'KTO', name:''};

   switch (action.type) {
        case EDITED_NAME_PASSENGER_MASTER:
        case PASSENGER_ARRAY_CHANGED:
            console.log(EDITED_NAME_PASSENGER_MASTER);
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
       case EDIT_CONTACT_PASSENGER_MASTER:
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
    passengers.forEach( (pax) => {
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
        case ADD_PASSENGER_MASTER:
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
                    surname:'',
                    gender:'',
                    dob:'',
                    milesCard: { company:'',cardNo: ''},
                    passport: {
                        issueCountry:'',
                        nationality:'',
                        expiresAt:'',
                        passNo:''
                    },
                    bags: [
                        {
                            bagId: 1,
                            legId: 0
                        }
                    ],
                    insuranceAir:0
                }
            ];
        case REMOVE_PASSENGER_MASTER:
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
        case CHANGE_PASSENGER_MASTER:
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
        case  EDIT_NAME_PASSENGER_MASTER:
            console.log(action.payload);
            return state.map( (pax, index) => {
                if (index == action.payload.passengerId) {
                    let newPax = pax;
                    newPax.surname = action.payload.surname;
                    newPax.name = action.payload.name;
                    return {
                        ...pax,
                        ...newPax
                    }
                }
                else {
                    return pax;
                }
            });
        case ADD_BAG_AIR:
            return [
                ...state,
                {
                    paxId : 0,
                    bagId: 1,
                    legId: 0
                }
            ];
         default:
            return state
    }
}







