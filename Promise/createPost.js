import requestComments from "./requestComments.js";

function createPost(data, field, id, urlPost, fetchData) {
  field.innerHTML = `
        <h3>${data.title}</h3>
        <div>${data.body} <div>
        `;

  const buttonCreate = document.createElement("button");
  buttonCreate.textContent = "показати";
  field.append(buttonCreate);

  requestComments(buttonCreate, field, id, urlPost, fetchData);
  return field;
}

export default createPost;
