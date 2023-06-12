const fetchData = (...url) => {
  const urlPost = url.join("/");

  return new Promise((resolve, reject) => {
    fetch(urlPost)
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response wasn't ok");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export default fetchData;
