import chooseOption from "./chooseOption.js";

function createTable(data, resultField) {
  const gender = chooseOption(data[3]);
  const language = chooseOption(data[6]);

  if (gender === "") {
    resultField.textContent += "gender, ";
  }
  if (language === "") {
    resultField.textContent += "language";
  }

  if (resultField.textContent !== "") {
    resultField.textContent = `you must answer the questions - ${resultField.textContent}`;
    return resultField;
  }

  return (resultField.innerHTML = `
      <table>
         <tr>
             <td>Name:</td>
             <td>${data[0].value}</td>
          </tr>
          <tr>
             <td>Surname:</td>
             <td>${data[1].value}</td>
          </tr>
          <tr>
             <td>Date of birth:</td>
             <td>${data[2].value}</td>
          </tr>
          <tr>
             <td>Gender:</td>
             <td>${gender}</td>
          </tr>
          <tr>
             <td>Town:</td>
             <td>${data[4].value}</td>
          </tr>
          <tr>
             <td>Address:</td>
             <td>${data[5].value}</td>
          </tr>
          <tr>
             <td>Language:</td>
             <td>${language}</td>
          </tr>   
      </table>
      `);
}

export default createTable;
