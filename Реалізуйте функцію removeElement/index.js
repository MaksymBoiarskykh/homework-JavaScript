const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (userArray, userItem) {
  let newArr = userArray.filter((item) => item !== userItem);
  return newArr;
};

console.log(removeElement(array, 5));
