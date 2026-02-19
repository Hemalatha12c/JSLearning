// conditional statement
// if, if..else, if...else...if, **switch, terinary

/*let age = 17;
if (age > 18) {
  console.log("eligeble to get DL");
} else {
  console.log("not eligible to get DL");
}


let teamName = "RCB";
if (teamName === "RCB") {
  console.log("ee sala cup namde");
} else if ((teamName = "CSK")) {
  console.timeLog("we have so much in list");
} else {
  console.log("still waiting");
}*/

// switch condition: to overcome the difficulty of if-else-if when the logic is more and to increase the performance
/*it breaks function when logic is satisfied , expression=value
// syntax:  switch(expression){
case value1:
  //logic here;
  break;
case value2:
  //logic here;
  break;
  default:
  //logic here;
}*/

// switch example one:
/*let mobile = "redmi";
switch (mobile) {
  case "iphone":
    console.log("display only iphone");
    break;

  case "samsung":
    console.log("display only samsung");
    break;

  default:
    console.log("display all mobile");
}*/

//example two:
let score = 80;
switch (
  true // true == true , that case works
) {
  case score > 80:
    console.log("score distinction");
    break;

  case score > 65:
    console.log("score first class");
    break;

  default:
    console.log("score not available");
}
