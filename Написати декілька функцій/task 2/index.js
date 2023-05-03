function doMath(x, znak, y) {
  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "^":
      for (let i = 1; i < y; i++) {
        x *= x;
      }
      return x;
    default:
      break;
  }
}
console.log(doMath(5, "^", 2));
