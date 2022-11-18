"use strict";

// filter - creating new filtered array

const names = ["Alex", "Max", "Robert", "Abrahamaaaaand"];
// need to pass callback function
const shortNames = names.filter(function (name) {
  return name.length < 5;
});
console.log(shortNames);

// map - creating new mapped/modified array

const answers = ["AlEx", "AnnA", "Hello"];
const results = answers.map((item) => item.toLowerCase());
console.log(results);

// every/some

//some - iteration over array and return true if one item is satisfying return true

const array = [4, "qwerty", "aaaaabbbbb"];
console.log(array.some((item) => typeof (item === "number")));

// every - if all items are satisfying return true, if not all return false

const array2 = [1, "aaa", 3];
console.log(array2.every((item) => typeof item === "number"));

// reduce - usually takes sum and current, but sometimes you can use optional paramenter after callback function
// i.e. arr.reduce((sum, current) => sum + current, 3);

const arr = [4, 5, 1, 3, 2, 6];
// how reduct works
//  1st iteration       sum:0 current:4
//  2nd iteration       sum:4 current:5
//  3nd iteration       sum:9 current:1
// etc...
const result = arr.reduce((sum, current) => sum + current);

// 2nd example of reduce
const arr2 = ["apple", "orange", "plum"];
const result2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(result2);

// entries - array of arrays
// i.e. need to transform obj to array
const obj = {
  alex: "person",
  ann: "person",
  bob: "animal",
  cat: "animal",
};

// const newArr = Object.entries(obj);

// chaining: filtering by 'person', mapping by name
const newArr = Object.entries(obj)
  .filter((item) => item[1] === "person")
  .map((item) => item[0]);
console.log(newArr);
