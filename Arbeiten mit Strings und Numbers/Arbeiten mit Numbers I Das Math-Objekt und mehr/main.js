"use strict";

console.log(Math);

// kreisfläche berechnen mit Radius
// A = PI * r²

let a = Math.PI * Math.pow(12, 2);
console.log(a);

let a_gerundet = Math.round(a);
console.log(a_gerundet);

let a_abgerundet = Math.floor(a);
console.log(a_abgerundet);

let a_aufgerundet = Math.ceil(a);
console.log(a_aufgerundet);

let a_nachkommastellen = a.toFixed(3);
console.log(a_nachkommastellen);

let a_integer = parseInt(a_nachkommastellen);
console.log(a_integer);

let a_float = parseFloat(a_nachkommastellen);
console.log(a_float);

