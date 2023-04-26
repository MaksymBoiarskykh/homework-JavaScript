let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
const positiveArr = arr.filter((item) => item > 0);

//  1 task
let resultMult = 0;
positiveArr.forEach((item) => (resultMult += item));

console.log(`
сума позитивних елементів = ${resultMult}
кількість позитивних елементів = ${positiveArr.length}
`);

// 2 task
let minItem = 0;
arr.forEach((item, index) => {
  if (item <= minItem) {
    minItem = item;
  }
});
console.log(
  `мінімальний елемент = ${minItem}, його індекс = ${arr.indexOf(minItem)}`
);

// 3 task
let maxItem = 0;
arr.forEach((item) => {
  if (item >= maxItem) {
    maxItem = item;
  }
});
console.log(
  `максимальний елемент = ${maxItem}, його індекс = ${arr.indexOf(maxItem)}`
);

// 4 task
console.log(
  `кількість негативних елементів = ${arr.length - positiveArr.length}`
);
// 5 task
let resultSum = 1;
positiveArr.forEach((item) => {
  resultSum *= item;
});
console.log(`добуток позитивних елементів   = ${resultSum}`);
