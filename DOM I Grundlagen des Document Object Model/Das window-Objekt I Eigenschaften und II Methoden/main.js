"use strict";

console.log(window);

// Eigenschaften des window-Objekts
console.log(innerWidth);
console.log(innerHeight);
console.log(outerWidth);
console.log(outerHeight);
console.log(scrollX);
console.log(screenY);
// für später im Kurs ....
console.log(location);
console.log(localStorage);
console.log(sessionStorage);

// Methoden des window-Objekts
alert("Achtung!");
confirm("Bist du dir sicher?");
prompt("Wie geht es dir?");
// let antwort = prompt("Wie geht es dir?");
// console.log(antwort);
// print();
// open("https://www.google.com/");
// close();
let nav = document.querySelector("#navigation");
let nav_styles = getComputedStyle(nav);
console.log(nav_styles);