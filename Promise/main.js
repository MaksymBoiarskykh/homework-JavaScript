import requestPost from "./requestPost.js";
import fetchData from "./fetchData.js";

requestPost(
  "input",
  "https://jsonplaceholder.typicode.com/posts",
  ".result",
  "button",
  fetchData
);
