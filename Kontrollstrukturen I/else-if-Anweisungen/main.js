"use strict";

// if (Bedingung1) {
//  Code der aufgeführt wird, wenn die Bedingung1 erfüllt (true) ist
// } else if (Bedingung2){
//     Code der ausgeführt wird, wenn die Bedingung2 nicht erfüllt (true) ist
// } else if (Bedingung3){
//     Code der ausgeführt wird, wenn die Bedingung3 nicht erfüllt (true) ist
// } else {
//     Code der ausgeführt wird, wenn die Bedingung2 nicht erfüllt (false) ist
// }

const minalter = 18;
let alter = prompt("Gibt bitte dein ALter an", "z.B. 22");

if (alter == minalter) {
    console.log("Du bist gerade alt genug!");
} else if (alter > minalter) {
    console.log("Du bist alt genug!");
} else {
    console.log("Du bist noch nicht alt genug!");
}
