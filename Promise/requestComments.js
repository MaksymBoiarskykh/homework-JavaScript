import commentsPost from "./comments.js";

function requestComments(buttonCreate, field, id, urlPost, fetchData) {
  let counter = 1;
  let comments = commentsPost();

  buttonCreate.addEventListener("click", () =>
    fetchData(urlPost, id.value.trim(), "comments")
      .then((data) => {
        return ++counter % 2 === 0
          ? comments.commentsCreate(data, field, buttonCreate)
          : comments.commentsDelete(field, buttonCreate);
      })

      .catch((error) => console.error(error))
  );

  return comments;
}

export default requestComments;
