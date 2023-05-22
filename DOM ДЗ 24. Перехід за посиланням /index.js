const firstLink = document.querySelector(".linkOne");
const secondLink = document.querySelector(".linkTwo");

function getCorrectLink(link) {
  return link
    .getAttribute("href")
    .split("//")
    .map((item) => (item === "" ? (item = "https:") : item))
    .join("//");
}

console.log(getCorrectLink(firstLink));
console.log(getCorrectLink(secondLink));
