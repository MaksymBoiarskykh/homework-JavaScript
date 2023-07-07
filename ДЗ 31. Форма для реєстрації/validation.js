import createTable from "./createTable.js";

function validation(data, resultField) {
  resultField.textContent = "";

  data.forEach((item) => {
    if (item.value == false) {
      resultField.textContent += `${item.name}, `;
    }
  });

  return createTable(data, resultField);
}

export default validation;
