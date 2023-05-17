class Human {
  constructor(nameHuman, ageHuman) {
    this.nameHuman = nameHuman;
    this.ageHuman = ageHuman;
  }
  info() {
    console.log(`Human name is - ${nameHuman} and age - ${ageHuman}`);
  }
}
class user1 = new Human("Max", 19)