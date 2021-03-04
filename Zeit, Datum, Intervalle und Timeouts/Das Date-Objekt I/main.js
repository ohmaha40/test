"use strict";

let d = new Date(); //aktuelles datum

console.log(d);
console.log(Date.now());  //UNIX Zeit seit 1.1.1970 um 00:00

let e = new Date(1414887762346);
console.log(e);

let f = new Date("12 24 2014");  // muss richtige form haben  iso 8601
console.log(f);

// new Date(jahr, monat-index[, tag[, stunde[,minute[,sekunde[,millisekunde]]]]])
let g = new Date(2012, 5/*index monat-1*/, 23, 15, 15, 15, 155);
console.log(g);