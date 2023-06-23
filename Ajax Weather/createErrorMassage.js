function createErrorMassage(error, field, town) {
  field.innerHTML =
    "You have entered the wrong city or there are problems with the connection ";
  console.error(error);
  return field;
}

export default createErrorMassage;
