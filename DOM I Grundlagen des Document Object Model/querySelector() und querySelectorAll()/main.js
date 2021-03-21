"use strict";
// Element mit CSS-Selektro auswählen
let qs_1 = document.querySelector("body > #navigation > ul")
console.log(qs_1);

let qs_2 = document.querySelector(".jumbotron");  // gibt den ersten Selektor zurück
console.log(qs_2);

let qs_3 = document.querySelector(".test");         // nichts finden gleich null
console.log(qs_3);

// let qs_4 = document.querySelector("%67§ >");        // kein richtiger selektor gewählt. fehlermedlung

// Elemente mit CSS-Selektor auswählen
let qsa_1 = document.querySelectorAll("body > #navigation > ul > li > a");
console.log(qsa_1);

let qsa_2 = document.querySelectorAll(".test");
console.log(qsa_2);
// console.log(qsa_2.length == 0);

// let qsa_3 = document.querySelectorAll("%67§ >");      // kein richtiger selektor gewählt. fehlermedlung

