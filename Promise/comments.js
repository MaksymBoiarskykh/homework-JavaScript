function commentsPost() {
  const fieldComments = document.createElement("div");
  fieldComments.classList.add("comment-block");

  // create
  function commentsCreate(data, field, button) {
    button.textContent = "сховати";
    fieldComments.innerHTML = data.reduce(
      (res, el) => (res += `<div><h3>${el.name}</h3>${el.body}</div>`),
      ""
    );
    field.append(fieldComments);
    return field;
  }

  // delete
  const commentsDelete = (field, button) => {
    button.textContent = "показати";
    field.removeChild(fieldComments);
    return field;
  };

  return { commentsCreate, commentsDelete };
}

export default commentsPost;
