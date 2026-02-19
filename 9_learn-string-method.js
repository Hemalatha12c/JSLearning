//     *** trim(""), split(""), join("") ***//
// **search(), includes(), tolocalelowercase(), tolocaleuppercase()** //

// let str = "I am in banglore     ";
// console.log(str.trim().length); // trim removes unnecessary space over the end/start

let str = "I am in banglore     ";
console.log(str.length);

// let str = "I am in banglore";
// console.log(str.length);

// let str = "I am in banglore";
// console.log(str.split(""));

// let str = "I am in banglore";
// console.log(str.split(" "));            // splitting wherever single space is seen

// let str = "I  am  in banglore";
// console.log(str.split("  ")); // wherever it finds two space it will split into string

// let str = "I am in banglore";
// console.log(str.split("").join("")); // spltit method splits elements and join method will join the elements

// let city = "BANGLORe";
// console.log(city.toLocaleLowerCase());

// let city = "Banglore";
// console.log(city.toLocaleUpperCase());

// let city = "Banglore";
// let state = "Karnataka";
// console.log(state.concat(city));  // concatination

// let city = "Banglore";
// let state = "Karnataka";
// console.log(state.concat(" ", city));   // for concatination with space

// let city = "Banglore";
// let state = "Karnataka";
// console.log(state.concat(" ", city));
// console.log(state + city);
// console.log(state + " " + city);

// let str = "I am in Bangalore";
// console.log(str.includes("am"));         // returns boolean value

// let str = "I am in Bangalore";
// console.log(str.includes("AM"));     // casesensitive

// let str = "I am in Bangalore";
// console.log(str.search("am")); //  returns a's index value

// let str = "I am in Bangalore";
// console.log(str.search("the"));          // if the value is not present it returns -ve value

// let str = "I am in Bangalore";
// console.log(str.search("in"));
