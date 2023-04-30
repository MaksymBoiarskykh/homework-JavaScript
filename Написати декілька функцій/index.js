// 1 task
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

// 2 task

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

// 4 task

function cutLine(userLine, userCut) {
  let result = userLine.split("");

  for (let i = 0; i < userCut.length; i++) {
    result = result.filter((item) => item !== userCut[i]);
  }
  return result.join("");
}
console.log(cutLine(" hello world", ["l", "h", "d"]));

// 3 task

function fillArray(
  mainArrLength,
  mainArrItem,
  daughterArrLength,
  daughterArrItem
) {
  if (
    mainArrLength < mainArrItem.length ||
    daughterArrLength < daughterArrItem.length
  ) {
    return console.log(
      "the number of elements is greater than the length of the array"
    );
  }

  let result = mainArrItem;
  result.length = mainArrLength;

  result = result.map((item) => {
    if (item.length === 0) {
      item = daughterArrItem;
      item.length = daughterArrLength;
    }
    return item;
  });

  return result;
}

console.log(fillArray(7, [3, [], true, [], 25], 10, ["anna", "max", "julia"]));
