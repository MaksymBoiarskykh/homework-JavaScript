// 1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// 2. Знайти мінімальний елемент масиву та його порядковий номер.
// 3. Знайти максимальний елемент масиву та його порядковий номер.
// 4. Визначити кількість негативних елементів.
// 5. Знайти добуток позитивних елементів.

let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
const positiveArr = arr.filter((item) => item > 0);

//  1 task
const resultSum = positiveArr.reduce((sum, item) => (sum += item), 0);
console.log(`
сума позитивних елементів = ${resultSum}
кількість позитивних елементів = ${positiveArr.length}
`);

// 2 task
const minItem = arr.reduce((min, item) => {
  if (item < min) {
    min = item;
  }
  return min;
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
const resultMult = positiveArr.reduce((sum, item) => (sum *= item), 1);
console.log(`добуток позитивних елементів   = ${resultMult}`);
