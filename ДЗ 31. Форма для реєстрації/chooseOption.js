function chooseOption(arr) {
  let result = "";
  arr.forEach((item) => {
    if (item.checked) {
      result == false ? (result = item.value) : (result += `, ${item.value}`);
    }
  });
  return result;
}

export default chooseOption;
