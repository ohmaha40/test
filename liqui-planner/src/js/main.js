"use strict"
/*
*           Praxis Projekt JavaScript
*           am 17.02.2021
*           
*           Keller Christian
*
*
*           !! promt eingabe sind Strings
*           !! parseInt convertiert in Int
*/
// Titel Eingabe
let titel_1 = prompt("Titel: ", "Einkaufen");
console.log(`Titel: ${titel_1}`);
// Eingabe der Art
let typ_1 = prompt("Typ: ", "Einnahme oder Ausgabe");
console.log(`Typ: ${typ_1}`);
// Eingabe des Betrages
let betrag_1 = parseInt(prompt("Betrag: ", "in Cent"));
console.log(betrag_1);
console.log(`Betrag: ${betrag_1} Cent`);
// Eingabe des Datums
let datum_1 = prompt("Datum: ", "jjjj-mm-tt");
console.log(`Datum: ${datum_1}`);

// Titel 2 Eingabe
let titel_2 = prompt("Titel: ", "Einkaufen");
console.log(`Titel: ${titel_2}`);
let typ_2 = prompt("Typ: ", "Einnahme oder Ausgabe");
console.log(`Typ: ${typ_2}`);
let betrag_2 = parseInt(prompt("Betrag:", "in Cent"));
console.log(betrag_2);
console.log(`Betrag: ${betrag_2} Cent`);
let datum_2 = prompt("Datum: ", "jjjj-mm-tt");
console.log(`Datum: ${datum_2}`);

//Variable für Bilanz anlegen
let bilanz_einnahmen;
let bilanz_ausgaben;
let bilanz_summe = betrag_1 + betrag_2;     
console.log(`Bilanz: ${bilanz_summe} Cent`);

let positiv = bilanz_summe >= 0;
console.log(`Bilianz ist positiv: ${positiv}`);
