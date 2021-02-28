"use strict";

// while (Bedingung) {
//     // Anweisungen
// }

let x = 0; // <-- Zählvariable

while (x < 5) {
    x++; // oder: x += 1 
    console.log(`While: ${x}`);  
}

// x = 1
// x = 2
// x = 3
// x = 4
// x = 5


let z = 0;

while (z < 10) {
    z++;
    if (z == 5) {
        continue; //Abbruch des schleifendurchbruch! nächste schleife startet
    } else if (z == 7) {
        break;      // Abbruch der Schleife komplett
    }
    console.log(z);
}

console.log("Schleife beendet!");