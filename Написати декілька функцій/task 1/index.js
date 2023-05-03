const arr = [1, "e", 19, true, 9, undefined, 4, 5];

function averageNumber(array) {
  let result = 0;
  let amount = 0;

  array.forEach((item) => {
    if (item === Number(item)) {
      result += item;
      amount += 1;
    }
  });
  return (result /= amount);
}
console.log(averageNumber(arr));
