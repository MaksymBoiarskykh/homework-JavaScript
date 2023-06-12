import createPost from "./createPost.js";

function requestPost(idInput, url, containerHTML, btnHTML, fetchData) {
  const idPost = document.querySelector(idInput);
  const field = document.querySelector(containerHTML);
  const btn = document.querySelector(btnHTML);
  const urlPost = url;

  btn.addEventListener("click", () => {
    if (idPost.value > 100 || idPost.value < 1) {
      field.innerHTML = "uncorrect value of post";
    } else {
      fetchData(urlPost, idPost.value)
        .then((data) => createPost(data, field, idPost, urlPost, fetchData))
        .catch((error) => console.error(error));
    }
  });
}

export default requestPost;
