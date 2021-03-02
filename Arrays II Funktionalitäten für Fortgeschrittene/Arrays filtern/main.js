"use strict";

let zahlen = [12, 23, 34, 77, 2, 32, 9, 55, 43, 11, 1];

let kleiner_gleich_20 = zahlen.filter(function (e) {
    if (e <= 20) {
        return true;
    } 
});

console.log(kleiner_gleich_20);