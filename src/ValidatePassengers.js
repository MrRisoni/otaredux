class ValidatePassengers {
  constructor() {

  }


  validate(papList) {
    let truthy = 0;
    let totalValids = 0;

    papList.forEach(px => {
      if (px.active) {
        truthy += this.validateNameSurname(px.surname);
        truthy += this.validateNameSurname(px.name);
        totalValids += 2;
      }
    });


    return (totalValids === truthy);
  }


  validateNameSurname(input) {
   // return (input.length > 0 && input.search(/[^a-zA-Z]+/) === -1);
    let emptySpaces = input.indexOf(' ') > -1;
    let numbers =  (input.length > 0 && input.search(/[^a-zA-Z]+/) === -1);
    let reasonCode = '';
    if (emptySpaces) {
       reasonCode = 'SPACES'
    } 
    if (numbers === false) {
      reasonCode = 'NUMERIC';
    }
    const valid = (emptySpaces === false) && (numbers === true);
    return {valid,reasonCode};
  }

  valDate() {

  }
}

export default ValidatePassengers;
