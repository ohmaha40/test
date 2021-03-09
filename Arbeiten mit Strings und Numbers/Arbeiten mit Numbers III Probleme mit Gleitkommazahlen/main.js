"use strict";

console.log(99.59 + 354.73); 
console.log(((99.59 * 100 + 354.73 * 100)/ 100)); //richtig gerechnet
console.log(((99.59 * 100 + 354.73 * 100)/ 100).toFixed(2));  //für feste kommazahlen aber dann "string"
console.log(parseFloat(((99.59 * 100 + 354.73 * 100)/ 100).toFixed(2))); // zurück nach number (hier float parseint für int)
console.log(9332654729891549); 
//          9332654729891548

