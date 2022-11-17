"use strict";

//JSON prac
const person = {
  name: "John",
  tel: "+123",
};

//stringify JSON (to server)
console.log(JSON.stringify(person));

//parse JSON (from server)

console.log(JSON.parse(JSON.stringify(person)));
