function sum() {
  let sum = 0;
  let result = (num) => (sum += num);

  return { result };
}
let sumTwo = sum();
console.log(sumTwo.result(3));
console.log(sumTwo.result(5));
console.log(sumTwo.result(20));
