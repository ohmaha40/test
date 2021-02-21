"use strict";

const multiplitieren = function (a = 20, b = 10) {
    console.log(a);
    console.log(b);
    console.log(a * b);
};

let z_1 = 42;
let z_2 = 20;

multiplitieren(z_1, z_2);


// funktion 3 para  vor nach alter  cons hallo etc    default werder 10 max mustermann   3 var 2 mal aufrufen mit und ohne


const begruessung = function (vor = "Max", nach = "Mustermann", alter = 18) {
    console.log(`Hallo ${vor} ${nach}, du bist ${alter} Jahre alt!`);
};

let vorname = "Christian";
let nachname = "Keller";
let alterv = 40;

begruessung(vorname,nachname,alterv);
begruessung();