"use strict"
/*
*           Praxis Projekt JavaScript
*           am 19.02.2021
*           
*           Keller Christian
*
*
*           !! promt eingabe sind Strings
*           !! parseInt convertiert in Int
*
*           AUfgabe: else if
*
*/
// Titel Eingabe

let bilanz_einnahmen = 0;
let bilanz_ausgaben = 0;
let bilanz_summe = 0;

let titel_1 = prompt("Titel: ", "Einkaufen");
let typ_1 = prompt("Typ: ", "Einnahme oder Ausgabe");
let betrag_1 = parseInt(prompt("Betrag: ", "in Cent"));
let datum_1 = prompt("Datum: ", "jjjj-mm-tt");

if (typ_1 === "Einnahme") { //Muss String sein
    bilanz_einnahmen = bilanz_einnahmen + betrag_1;
    bilanz_summe = bilanz_summe + betrag_1;
} else if ( typ_1 === "Ausgabe") {
    bilanz_ausgaben = bilanz_ausgaben + betrag_1;
    bilanz_summe = bilanz_summe - betrag_1;
} else {
    console.log(`Der Typ "${typ_1}" ist nicht bekannt`);
}

console.log(`
Titel: ${titel_1}
Datum: ${datum_1}
Typ: ${typ_1}
Betrag: ${betrag_1} Cent
Einnahmen: ${bilanz_einnahmen} Cent
Ausgaben: ${bilanz_ausgaben} Cent
Bilanz: ${bilanz_summe} Cent
`);

// Titel 2 Eingabe
let titel_2 = prompt("Titel: ", "Einkaufen");
let typ_2 = prompt("Typ: ", "Einnahme oder Ausgabe");
let betrag_2 = parseInt(prompt("Betrag:", "in Cent"));
let datum_2 = prompt("Datum: ", "jjjj-mm-tt");

if (typ_2 === "Einnahme") {
    bilanz_einnahmen = bilanz_einnahmen + betrag_2;
    bilanz_summe = bilanz_summe + betrag_2;
} else if ( typ_2 === "Ausgabe") {
    bilanz_ausgaben = bilanz_ausgaben + betrag_2;
    bilanz_summe = bilanz_summe - betrag_2;
} else {
    console.log(`Der Typ "${typ_2}" ist nicht bekannt`);
}

console.log(`
Titel: ${titel_2}
Datum: ${datum_2}
Typ: ${typ_2}
Betrag: ${betrag_2} Cent
Einnahmen: ${bilanz_einnahmen} Cent
Ausgaben: ${bilanz_ausgaben} Cent
Bilanz: ${bilanz_summe} Cent
`);

//Variable für Bilanz anlegen
let positiv = bilanz_summe >= 0;
console.log(`
Einnahmen: ${bilanz_einnahmen} Cent
Ausgaben: ${bilanz_ausgaben} Cent
Bilanz: ${bilanz_summe} Cent
Bilianz ist positiv: ${positiv}
`);
