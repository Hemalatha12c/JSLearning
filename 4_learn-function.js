//syntax:// function functionname(){

// }

//function declaration
function sayHello() {
  console.log("Hi,hello");
}
sayHello(); // calling function

//function expression
var sayhello = function () {
  console.log("hi,hello");
};
sayhello();

//function with arguments
function getSalary(value) {
  console.log("salary is : ", value);
}
getSalary(600);

//function with return statement
function getsalary(value) {
  return value;
}
var salary = getsalary(1000); // when u write return store it in variable
console.log(salary);
