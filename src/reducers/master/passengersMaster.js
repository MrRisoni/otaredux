

import * as MasterCons from '../../actions/master/allConstants';


const passengers = [
  {
    id: 0,
    humanId: 1,
    active: true,
    type: 'ADT',
    name: '',
    surname: '',
    gender: '',
    dob: '',
    passport: {
      issueCountry: '',
      nationality: '',
      expiresAt: '',
      passNo: '',
    },
  },
];


const contactData = {
  surname: 'FOO',
  name: 'BAR',
  changed: false,
  gender: '',
  prefix: '',
  mobile: '',
  email: '',
  country: '',
  city: '',
  address: '',
  postcode: '',
};


export function contactMasterReducer(state = contactData, action) {
  let firstActivePax = { surname: 'KTO', name: '' };

  switch (action.type) {
    case MasterCons.EDITED_NAME_PASSENGER_MASTER:
    case MasterCons.PASSENGER_ARRAY_CHANGED:
      if (!contactData.changed) {
        firstActivePax = getFirstActivePax(action.payload.passengers);


        return {
          ...state,
          surname: firstActivePax.surname,
          name: firstActivePax.name,
        };
      }

    case MasterCons.EDIT_CONTACT_PASSENGER_MASTER:
      // { key action.payload.key}
      return {
        ...state,
        surname: action.payload.surname,
        name: action.payload.name,
        changed: true,
        gender: action.payload.gender,
        prefix: action.payload.prefix,
        mobile: action.payload.mobile,
        email: action.payload.email,
        country: action.payload.country,
        city: action.payload.city,
        address: action.payload.address,
        postcode: action.payload.postcode,
      };
    default:
      return contactData;
  }
}

function getFirstActivePax(passengers) {
  // get first adult
  const firstActivePax = { surname: '', name: '' };
  let maxId = 50;
  passengers.forEach(pax => {
    if (pax.active && pax.id < maxId && pax.type === 'ADT') { // ADULT PAX
      maxId = pax.id;
      firstActivePax.surname = pax.surname;
      firstActivePax.name = pax.name;
    }
  });
  return firstActivePax;
}

export function passengersMasterReducer(state = passengers, action) {
  switch (action.type) {
    case MasterCons.ADD_PASSENGER_MASTER:
      let maxHumanId = 0;
      state.forEach(pax => {
        if (pax.active && maxHumanId < pax.humanId) {
          maxHumanId = pax.humanId;
        }
      });

      maxHumanId++;

      return [
        ...state,
        {
          id: state.length,
          humanId: maxHumanId,
          active: true,
          type: 'ADT',
          name: '',
          surname: '',
          gender: '',
          dob: '',
          passport: {
            issueCountry: '',
            nationality: '',
            expiresAt: '',
            passNo: '',
          },
        },
      ];
    case MasterCons.REMOVE_PASSENGER_MASTER:

      let totalRemainActivePaxes = state.filter(px => px.active === true).length;
      totalRemainActivePaxes--;
      if (totalRemainActivePaxes > 0) {
        const newPaxes = [...state];

        const paxIdRemoval = action.payload.passengerId;

        // reorder human ids
        let newHumanId = 1;

        newPaxes.forEach(pax => {
          if (pax.id == paxIdRemoval) {
            pax.active = false;
          }

          if (pax.active) {
            pax.humanId = newHumanId;
            newHumanId++;
          }
        });
        return newPaxes;
      }

      return state;


    case MasterCons.CHANGE_PASSENGER_MASTER:
      return state.map((pax, index) => {
        if (index == action.payload.passengerId) {
          return {
            ...pax,
            type: action.payload.newType,
          };
        }
        return pax;
      });

    case MasterCons.EDIT_NAME_PASSENGER_MASTER:
      return state.map((pax, index) => {
        if (index == action.payload.passengerId) {
          return {
            ...pax,
            surname: action.payload.surname,
            name: action.payload.name,
            gender: action.payload.gender,
          };
        }
        return pax;
      });

    default:
      return state;
  }
}
