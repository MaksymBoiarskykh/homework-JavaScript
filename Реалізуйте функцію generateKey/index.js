const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let charactersArray = characters.split("");

  let result = [];
  for (let i = 0; i < length; i++) {
    let item = Math.round(Math.random() * characters.length);
    result.push(charactersArray[item]);
  }

  return result.join("");
}

const key = generateKey(15, characters);
console.log(key);
