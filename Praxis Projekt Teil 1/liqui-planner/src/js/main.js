"use strict"
/*
*           Praxis Projekt JavaScript
*           am 16.02.2021
*           
*           Keller Christian
*/
// Titel Eingabe
let titel_1 = prompt("Bitte den Titel des Ein/Ausgabe eingeben", "Einkaufen");
console.log("Ihr Titel lautet ",titel_1);
// Eingabe der Art
let typ_1 = prompt("Bitte die Art angeben", "Einnahme oder Ausgabe");
console.log("Die art ", typ_1, " wurde ausgewählt");
// Eingabe des Betrages
let betrag_1 = prompt("Bitte geben Sie den Betrag ein", "in Cent");
console.log("Ihr Betrag lautet ",betrag_1, " Cent");
// Eingabe des Datums
let datum_1 = prompt("Bitte geben Sie das Datum an", "jjjj-mm-tt");
console.log("Das Datum der Ein/Ausgabe lautet ", datum_1);

//Variable für Bilanz anlegen
let bilanz_einnahmen;
let bilanz_ausgaben;
let bilanz_summe;

