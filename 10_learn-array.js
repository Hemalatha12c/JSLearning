// (Array) - is an object which will be used to store the collection of data , in java it can have different datatypes

// let arr = ["1", "2", "3", "4", "5"];
// console.log(arr);

// let arr = ["1", "2", "3", "4", "5"];
// console.log(arr[0]);

// let arr = ["1", "2", "3", "4", "5"];
// console.log(arr.length);

// let arr = ["1", "2", "3", "4", "5"];
// for (let i = 0; i < arr.length; i++) {
//   console.log("value is", arr[i]);
// }

// program to calculate the occurance of letter "a"
// let count = 0;
// let str = "I am in Bangalore";
// console.log(str.split(""));
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "a") count = count + 1;
// }
// console.log(count);

// to find a largest word in the string
let str = "Bangalore is place i live in";
let temp = str.split(" ");
let final = " ";
for (let i = 0; i < temp.length; i++) {
  if (temp[i].length > final.length) {
    final = temp[i];
  }
}
console.log(final);
