"use strict";

// if (Bedingung) {
//  Code der aufgeführt wird, wenn die Bedingung erfüllt (true) ist
// } else {
//     Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
// }

// if (false) {
//     console.log("If wurde ausgeführt");
// } else {
//     console.log("else wurde ausgeführt");
// }

// const minalter = 18;
// let alter = prompt("Gibt bitte dein ALter an", "z.B. 22");

// if (alter >= minalter) {
//     console.log("Du bist alt genug!");
// } else {
//     console.log("Du bist noch nicht alt genug");
// }

const minalter = 18;
let alter = prompt("Gibt bitte dein ALter an", "z.B. 22");

if (alter >= minalter) {

    if(alter == minalter){
        console.log("Du bist gerade alt genug!");
    } else {
        console.log("Du bist alt genug!");
    } 
    
} else {
    console.log("Du bist noch nicht alt genug!");
}