"use strict";
/*
*               ==      gleich
*               !=      ungleich
*               >       größer als
*               <       kleiner als
*               >=      größer oder gleich als
*               <=      kleiner oder gleich als
*         
*/

console.log(42 == 42);              // true
console.log(42 == 43);              // false
console.log("-------------------------");

console.log(42 != 42);              // false
console.log(42 != 43);              // true
console.log("-------------------------");

console.log(42 > 42);               // false
console.log(42 > 43);               // false
console.log(43 > 42);               // true
console.log("-------------------------");

console.log(42 < 42);               // false
console.log(42 < 43);               // true
console.log(43 < 42);               //false
console.log("-------------------------");

console.log(42 >= 42);               // true
console.log(42 >= 43);               // false
console.log(43 >= 42);               // true
console.log("-------------------------");

console.log(42 <= 42);               // true
console.log(42 <= 43);               // true
console.log(43 <= 42);               //false
console.log("-------------------------");