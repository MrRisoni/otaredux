
const busItinerary = [
    {
        fromCity:'Athens',
        toCity:'Argostoli',
        departTime:'2018-03-27T10:00:00',
        arrivalTime:'2018-03-27T17:30:00',
        duration: {
            hours: 7,
            minutes:30
        }
    }
];


export function itineraryBusReducer(state = busItinerary, action) {
   return state;
}
