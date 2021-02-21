"use strict";

// logische "und" &&
// logische "oder" ||
// logische "nicht" !

console.log(1 > 0 && 4 < 6);    // true
console.log(1 > 0 && 6 < 4);    // false

console.log(1 > 0 || 4 < 6);    // true
console.log(1 > 0 || 6 < 4);    // true

console.log(1 > 0 && !(6 < 4)); // true
console.log(!true);             // false

console.log(1 > 0 && 4 < 6 && 10 < 20); // true
console.log(1 > 0 && 4 < 6 && 10 > 20); // false
console.log(1 > 0 && 4 < 6 || 10 > 20); // true
console.log(1 > 0 && 4 > 6 || 10 < 20); // true

console.log(1 < 0 && 10 < 20 || 6 > 4);     //true
console.log(1 < 0 && (10 < 20 || 6 > 4));   // false