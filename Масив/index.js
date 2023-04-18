let userArray = [];

// создание пустого массива
userArray.length = prompt("задайте довжину массива");
console.log(userArray);

// добавляние элементов
userArray = prompt("задайте элементи массива через пробіл").split(" ");
console.log(userArray);

// сортировка
const sortArray = userArray.sort();
console.log(sortArray);

// удаление
sortArray.splice(1, 3);
console.log(sortArray);
