const emogjiList = document.querySelectorAll(".emoji");

function createCounter(votingArr) {
  votingArr.forEach((item) => {
    item.append(document.createElement("div"));
  });

  let numberList = document.querySelectorAll("div");

  votingArr.forEach((item, index) => {
    let count = 0;
    item.addEventListener("click", () => {
      numberList[index].innerHTML = ++count;
      item.append(numberList[index]);
    });
  });
}
createCounter(emogjiList);
