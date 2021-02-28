"use strict";

let x = 0;      //Zählvariable

while (x < 5) {     //Bedingung
    console.log(x); //code
    x++;    //Anweisung für die Zählvariable
}

// for (zähvariable; Bedingung; Anweisung für die Zählvariable) {
//     //Code
// }

for (let i = 0; i < 5; i++){
    if (i == 3) {
        continue;
    } else if (i == 4) {
        break;
    }
    console.log(i);
}
console.log("for-schleife ist beendet!");

//Vorsicht vor Endlosschleifen