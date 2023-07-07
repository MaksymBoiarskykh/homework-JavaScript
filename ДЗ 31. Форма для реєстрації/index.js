import validation from "./validation.js";

function createFormResult(...data) {
  const buttonClick = document.querySelector(".btn input");
  const resultField = document.querySelector(".result");

  buttonClick.addEventListener("click", () => {
    form.remove();
    validation(data, resultField);
  });
}

const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const secondName = document.querySelector("#second-name");
const dateBirth = document.querySelector("#birth");
const gender = document.querySelectorAll("input[type='radio']");
const town = document.querySelector("#town");
const address = document.querySelector("#address");
const language = document.querySelectorAll("input[type='checkbox']");

createFormResult(
  firstName,
  secondName,
  dateBirth,
  gender,
  town,
  address,
  language
);
