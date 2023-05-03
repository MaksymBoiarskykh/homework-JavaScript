let askLine = prompt("вкажіть вхідний рядок");
let askCutSymbols = prompt("вкажіть символи для видалення через пробіл").split(
  " "
);

function getCutLine(userLine, userCut) {
  let result = userLine.split("");

  for (let i = 0; i < userCut.length; i++) {
    result = result.filter((item) => item !== userCut[i]);
  }
  return result.join("");
}
console.log(getCutLine(askLine, askCutSymbols));
