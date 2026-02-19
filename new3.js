// loops: to execute piece of code again and again
/*for (let count = 1; count <= 5; count++) {
  console.log("apna"); // executes 5 times
}
console.log("loop ended");*/

// to calculate sum of 1-5
let sum = 0;
let n = 5;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
  //console.log(sum);
}
console.log(sum);

// to print 1-5
for (let i = 1; i <= 5; i++) {
  console.log("i = ", i);
}

// while loop
let k = 1;
while (k <= 5) {
  console.log("k = ", k);
  k++;
}

// do while loop
let e = 5;
do {
  console.log("hema");
  e++;
} while (e <= 3); // runs atleast 1 time even if condition is false as the condition is written at last

// printing 1-5
let u = 1;
do {
  console.log("u = ", u);
  u++;
} while (u <= 5);

// for in loop
let student = {
  name: "hema",
  age: 22,
  cgpa: 8,
  ispass: true,
};
for (let key in student) {
  console.log("keys are : ", key, "values are", student[key]);
}

// print even number 0 to 100

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
