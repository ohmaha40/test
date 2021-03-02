"use strict";

let mein_array = [
    "Peter",
    "Mia",
    "Marc"
];

let mein_objekt = {
    name: "Max",
    vorname: "Mustermann",
    alter: 26
};

console.log(mein_array);
console.log(mein_objekt);

for (let e in mein_array) {         // gibt die Eigenschaft aus (hier Index)
    console.log(e);
}
for (let e in mein_objekt) {
    console.log(e);
}
for (let e of mein_array) {         // for off nur bei Array, map?,set?
    console.log(e);
}
