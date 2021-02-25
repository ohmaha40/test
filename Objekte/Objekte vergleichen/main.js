"use strict";

let auto_1 = {
    marke: "BMW",
    modell: "i8"
};

let auto_2 = {
    marke: "Tesla",
    modell: "Model X"
};

let auto_3 = {
    marke: "Tesla",
    modell: "Model X"
};

console.log(auto_1 == auto_2);
console.log(auto_2 == auto_3);
console.log(auto_3 == auto_3);
console.log({} == {});

//challenge: schreibe eine Funktion, die zwei Auto-Obkejte mit dem Eigeschaften "marke" und "modell"
//übergeben bekommt und prüft, ob die Objekte gleich sind.

// const objekte_vergleichen = function (ob_a,ob_b) {
//     if (ob_a.marke == ob_b.marke && ob_a.modell == ob_b.modell ) {
//       return true;
//     } else {
//     return false;
//     }   
// };

const vergleichen = function (ob_a, ob_b) { return ob_a.marke == ob_b.marke && ob_a.modell ==ob_b.modell;}
console.log(vergleichen(auto_1, auto_2));