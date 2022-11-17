"use strict";
//ES5 methods
function user(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`${this.name} id:${this.id}, says Hello`);
  };
}
//prototype
user.prototype.exit = function () {
  console.log(`${this.name} has left the chat`);
};

const sergey = new user("Sergey", 808);
const alex = new user("Alex", 707);

sergey.hello();
sergey.exit();
console.log(alex);

//ES6 classes method

class user {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
}
hello() {
    console.log(`${this.name} id:${this.id}, says Hello`);
}
exit() {
    console.log(`${this.name} has left the chat`);
}

