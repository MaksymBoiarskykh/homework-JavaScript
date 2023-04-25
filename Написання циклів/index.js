// 1
let arrFirst = [];
for (let i = 10; i <= 20; i++) {
  arrFirst.push(i);
}
console.log(arrFirst.join(", "));

// 2
let arrSecond = [];
for (let i = 10; i <= 20; i++) {
  arrSecond.push(i * i);
}
console.log(arrSecond.join(", "));

// 3
for (let i = 1; i <= 10; i++) {
  let result = `7 * ${i} = ${7 * i}`;
  console.log(result);
}

// 4
let resultFourth = 0;
for (let i = 1; i <= 15; i++) {
  resultFourth += i;
}
console.log(resultFourth);

// 5
let resultFifth = 1;
for (let i = 15; i <= 35; i++) {
  resultFifth *= i;
}
console.log(resultFifth);

// 6
let resultSixth = 0;
for (let i = 1; i <= 500; i++) {
  resultSixth += i;
}
console.log(resultSixth / 500);

// 7
let resultSeventh = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    resultSeventh += i;
  }
}
console.log(resultSeventh);
g;

// 8
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
