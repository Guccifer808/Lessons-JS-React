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

// cloning object
const persone = {
  name: "John",
  tel: "+123",
  parents: {
    mom: "Nana",
    dad: "Mike",
  },
};

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = "Anna";
console.log(persone);
console.log(clone);
