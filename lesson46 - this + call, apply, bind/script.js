"use strict";

// 1) Обычная фция: this = window, if 'use strict' = undefined

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return this.a + this.b;
//   }
//   console.log(sum());
// }
// showThis(1, 2);

// 2) Контекст вызова у методов объекта = сам объект

// const obj = {
//   a: 1,
//   b: 5,
//   sum: function () {
//     console.log(this);
//   },
// };
// obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объекта

// function user(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log("Hello" + this.name);
//   };
// }
// let sergey = new user("sergey", 808);

// 4) Ручное присвоение контекста this. Call, apply, bind

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name) + surname;
// }

// const user = {
//   name: "John",
// };

// // call and apply
// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// // bind. Bind creates new function
// function count(num) {
//   return this * num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

// --- eventListener with classic function() = object itself
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  this.style.backgroundColor = "purple";
});
//Если использовать стрелочную фцию, то контекста вызова this потеряется = undefined
// Поэтому используем e и e.target
btn.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "purple";
});

// --- eventListener with arrow function
const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};
obj.sayNumber();

//Arrow func 1line = no return; If 1 argument = no ()
//const double = a => a * 2;
