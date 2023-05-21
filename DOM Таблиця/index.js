const bigTable = document.createElement("table");
bigTable.setAttribute("border", "1px");

let count = 1;
for (let i = 1; i <= 10; i++) {
  const userLine = document.createElement("tr");
  bigTable.appendChild(userLine);

  for (let j = 1; j <= 10; j++) {
    const userColumn = document.createElement("td");
    userColumn.innerHTML = count++;
    userLine.appendChild(userColumn);
  }
}

document.body.appendChild(bigTable);
