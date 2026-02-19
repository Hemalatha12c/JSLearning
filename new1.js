// operators
let a = 3;
let b = 2;
console.log("a+b = ", a + b);
console.log("a-b = ", a - b);
console.log("a*b = ", a * b);
console.log("a/b = ", a / b);
console.log("a%b = ", a % b);
console.log("a**b = ", a ** b);

//unary operator

console.log("a =", a++); //3  - postincrement
console.log("a = ", a); //4
console.log("a = ", ++a); //5 - preincrement
console.log("a =", a--); // 5 - postdecrement
console.log("a = ", a); // 4
console.log("a = ", --a); //3 - pre decrement

// assignment operator: =, +=, -=, *=, /=, %=, **=
let c = 4;
let d = 1;
c += 1; // c=c+1
console.log("c = ", c);

// comparision operator: ==, ===, !=, !==, >, >=, <, <=
let e = 4;
let f = 4;
console.log("4==2", e == f); // checks only value
console.log("4==2", e != f);
console.log("4==2", e === f);
console.log("4==2", !(e === f));
// along with value also checks datatype

// logical operator: &&, ||, !
