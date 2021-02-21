"use strict";

// const meine_funktion = function(parameter_1, parameter_2) {
//     auszuführender Code
// };

// meine_funktion(p_1,p_2);

const log_die_zahl = function (a) {
    console.log(a);
};

log_die_zahl(42);

const begruessung = function (x,y) {
    console.log(`Hallo ${x} ${y}!`);
};

let vorname = "Christian";
let nachname = "Keller";

begruessung(vorname, nachname);

// 2 para 5 cons rechenarten 5 var 0-100 5 x function 

const rechen = function (a,b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
};

let zahl_1 = 45;
let zahl_2 = 40;
let zahl_3 = 99;
let zahl_4 = 27;
let zahl_5 = 53;

rechen(zahl_1,zahl_3);
rechen(zahl_3,zahl_2);
rechen(zahl_4,zahl_5);
rechen(zahl_1,zahl_2);
rechen(zahl_3,zahl_4);
