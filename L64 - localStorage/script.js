"use strict";

// localStorage - object within window. properties
//set localStorage item ( key, value )
// localStorage.setItem("number", 5);

//get localStorage item (key)
// localStorage.getItem("number");

//remove localStorage item (key)
// localStorage.removeItem("number");

// clear localStorage
// localStorage.clear();

// practice
// save checkbox & change color button properties to localStorage
const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

// checking localStorage checkbox
if (localStorage.getItem("isChecked")) {
  checkbox.checked = true;
}
// checking localStorage button
if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}

// setting localStorage item by clicking on button
checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);
});

// setting button checks
change.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "white";
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "green";
  }
});

// passing JSON object to localStorage
const person = {
  name: "John",
  age: 25,
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem("John", serializedPerson);

console.log(JSON.parse(localStorage.getItem("John")));

// passing object to localStorage
// object will be converted to string
const person2 = {
  name: "John",
  age: 25,
};

localStorage.setItem("John", person2);
console.log(localStorage.getItem("John"));
