function createArray() {
  let mainArr = prompt(
    "введіть елементи головного массива через пробіл (якщо бажаєте вставити массив, то пишіть [])"
  ).split(" ");
  let mainArrLength = prompt("введіть довжину головного массиву");

  let result = mainArr.map((item) => {
    if (item === "[]") {
      item = prompt("введіть елементи малого массиву через пробіл").split(" ");
      let itemLength = prompt("введіть довжину малого массиву");
      item = checkArror(item, itemLength);
    }
    return item;
  });

  return checkArror(result, mainArrLength);
}

function checkArror(userArr, userArrLength) {
  if (userArrLength < userArr.length) {
    return "кількість елементів більша за довжину массива";
  }
  userArr.length = userArrLength;
  return userArr;
}

console.log(createArray());
