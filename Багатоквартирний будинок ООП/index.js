// Human
class Human {
  constructor(nameHuman, genderHuman) {
    this.nameHuman = nameHuman || "unknown";
    this.genderHuman = genderHuman || "unknown";
  }
}

// Flat
class Flat {
  residentsArray = [];

  residents(human) {
    this.residentsArray.push(human);
  }
}

// Building
class Building {
  constructor(limitFlat) {
    this.limitFlat = limitFlat;
    this.finishHouse = [];
  }

  produceFlat(...flatArr) {
    if (flatArr.length > this.limitFlat) {
      this.finishHouse =
        "the number of apartments is more than the house can fit";
    } else {
      this.finishHouse = flatArr;
    }
  }
}

const firstFlat = new Flat();
firstFlat.residents(new Human("Max", "male"));

const secondFlat = new Flat();
secondFlat.residents(new Human("Julia", "female"));
secondFlat.residents(new Human("Andrey", "male"));

let firstBuilding = new Building(4);
firstBuilding.produceFlat(firstFlat, secondFlat);

// Result
console.log(firstBuilding.finishHouse);
