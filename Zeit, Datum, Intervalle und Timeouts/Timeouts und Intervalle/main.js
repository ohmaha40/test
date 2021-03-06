"use strict";
// Timeout
// setTimeout(callback-funktion, zeitspanne[,parameter1,parameter2,.....parameterN])
// console.log("Los");
console.log(setTimeout(function () {
    console.log("Fertig");
}, 2000));

// clearTimeout(1);


// //setTimout(code-string, zeitspann)        // nicht so schön
// console.log("Los");
// setTimeout("console.log('Fertig!');", 2000);


// intervalle

// setIntervall(callback-funktion, zeitspanne[,parameter1,parameter2,.....parameterN])

// setInterval(function () {
//     console.log("Eine Sekunde ist um!");
// },1000);


// //setInterall(code-string, zeitspann)        // nicht so schön

setInterval("console.log('Eine Sekunde ist vorbei!');", 1000);
setTimeout(function() {
    clearInterval(1);
    console.log("Ende Intervall");
}, 10000);
