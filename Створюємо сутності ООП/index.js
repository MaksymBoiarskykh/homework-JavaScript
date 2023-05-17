class Human {
  constructor(nameHuman, ageHuman) {
    this.nameHuman = nameHuman || "unknown";
    this.ageHuman = ageHuman || "unknown";
  }
  getInfo() {
    console.log(`Human name is - ${this.nameHuman} and age - ${this.ageHuman}`);
  }
}

class Car {
  constructor(brand, model, yearOfIssue, numberplate) {
    this.brand = brand || "unknown";
    this.model = model || "unknown";
    this.yearOfIssue = yearOfIssue || "unknown";
    this.numberplate = numberplate || "unknown";
    this.owner = "unknown";
  }

  createOwner(human) {
    if (human.ageHuman < 18) {
      console.log("you are too young for driving");
      return;
    }
    this.owner = human;
  }

  getInfo() {
    console.log(
      `Brand - ${this.brand}, model - ${this.model}, year of issue - ${this.yearOfIssue}, numberplate - ${this.numberplate}`
    );
    this.owner.getInfo();
  }
}

const nissan = new Car("nissan", "leaf", 2013, 1540);
nissan.createOwner(new Human("Anna", 20));

const audi = new Car("audi", "S1", 2013, 3091);
audi.createOwner(new Human("Max", 19));

nissan.getInfo();
audi.getInfo();
