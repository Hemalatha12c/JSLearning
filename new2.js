// conditional statements
/*let age = 18;
if (age >= 18) {
  console.log("you can vote");
}

if (age < 18) {
  console.log("you cannot vote");
}*/

/*let mode = "dark";
let color = "";
if (mode === "dark") {
  color = "Black";
} else {
  color = "white";
}
console.log(color);*/

/*// to check number is even or odd
let num = 3;
if (num % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}*/

/*//else-if statement
let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "blue";
} else {
  color = "white";
}
console.log(color)*/

/*//ternary operators
//condition ? true o/p : false o/p

let age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);*/

/*// get user to input a number using prompt ("enter a  number"). check if the number is a multiple of 5 or not
let num = prompt("enter a number");
let res = "";
if (num % 5 === 0) {
  res = "it is multiple of 5";
} else {
  res = "it is not multiple of 5";
}
console.log(res);*/

// to give grades to students
let marks = 80;
let result = "";
if (marks >= 90 && marks <= 100) {
  result = "A";
} else if (marks >= 70 && marks <= 89) {
  result = "B";
} else if (marks >= 60 && marks <= 69) {
  result = "C";
} else if (marks >= 50 && marks <= 59) {
  result = "D";
} else if (marks >= 40 && marks <= 49) {
  result = "F";
}
console.log(result);
