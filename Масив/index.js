let userArray = [];

let userLength = prompt("задайте довжину массива");
userArray.length = userLength;
console.log(userArray, "пустий");

userArray = prompt("задайте элементи массива через пробіл").split(" ");

if (userArray.length > userLength) {
  console.log("кількість елементів більша ніж може вмістити массив");
} else {
  console.log(userArray, "з елементами користувача");

  const sortArray = userArray.sort();
  console.log(sortArray, "відсортований");

  if (userArray.length > 3) {
    sortArray.splice(1, 3);
    console.log(sortArray, "обрізаний");
  } else {
    console.log(
      "массив не містить елементи в діапозоні від 2 до 4, тому немає компонентів для видалення"
    );
  }
}
