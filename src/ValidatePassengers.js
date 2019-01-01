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
    return (input.length > 0 && input.search(/[^a-zA-Z]+/) === -1);
  }

  valDate() {

  }
}

export default ValidatePassengers;
