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
  }

  finishHouse = [];
  addFlat(flat) {
    if (this.finishHouse.length >= this.limitFlat) {
      console.log("Будинок повністю заповнений, зміни не будуть додані");
    } else {
      this.finishHouse.push(flat);
    }
  }
}

const firstFlat = new Flat();
firstFlat.residents(new Human("Max", "male"));

const secondFlat = new Flat();
secondFlat.residents(new Human("Julia", "female"));
secondFlat.residents(new Human("Andrey", "male"));

let firstBuilding = new Building(4);
firstBuilding.addFlat(firstFlat);
firstBuilding.addFlat(secondFlat);
firstBuilding.addFlat(secondFlat);

// Result
console.log(firstBuilding.finishHouse);
