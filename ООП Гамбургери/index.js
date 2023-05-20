class Hamburger {
  constructor(size, stuffing) {
    this.mainArr = [size, stuffing];
  }

  // size of burger
  static SIZE_SMALL = [50, 20];
  static SIZE_BIG = [100, 40];

  // stuffing of burger
  static STUFFING_CHEESE = [10, 20];
  static STUFFING_SALAT = [20, 5];
  static STUFFING_POTATO = [15, 10];

  // topping of burger
  static TOPPING_MAYO = [20, 5];
  static TOPPING_SAUCE = [15, 0];

  // add topping function
  addTopping(topping) {
    return this.mainArr.push(topping);
  }

  // calculate functions
  calculate() {
    return this.mainArr.reduce((sum, el) => (sum += el[1]), 0);
  }
  calculatePrice() {
    return this.mainArr.reduce((sum, el) => (sum += el[0]), 0);
  }
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
