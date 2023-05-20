const userInput = document.querySelector("input");
const divGhost = document.querySelector(".ghost");

userInput.addEventListener("focus", () => (divGhost.style.display = "block"));
userInput.addEventListener("blur", () => (divGhost.style.display = "none"));
