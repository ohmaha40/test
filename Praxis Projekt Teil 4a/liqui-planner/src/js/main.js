"use strict"
/*
*           Praxis Projekt JavaScript
*           am 19.02.2021
*           
*           Keller Christian
*
*
*           
*/
// Titel Eingabe

let bilanz_einnahmen = 0,
    bilanz_ausgaben = 0,
    bilanz_summe = 0,
    titel,
    typ,
    betrag,
    datum;

const eintrag_erfassen = function () {
    titel = prompt("Titel: ", "Einkaufen");
    typ = prompt("Typ: ", "Einnahme oder Ausgabe");
    betrag = parseInt(prompt("Betrag: ", "in Cent"));
    datum = prompt("Datum: ", "jjjj-mm-tt");
};

const eintag_ausgeben = function (a, b, c, d) {
    console.log(`
Titel: ${a}
Typ: ${b}
Betrag: ${c} Cent
Datum: ${d}
`);
}

const eintrag_mit_gesamtbilanz_verechnen = function (typ, betrag) {
    if (typ === "Einnahme") {
        bilanz_einnahmen = bilanz_einnahmen + betrag;
        bilanz_summe = bilanz_summe + betrag;
    } else if (typ === "Ausgabe") {
        bilanz_ausgaben = bilanz_ausgaben + betrag;
        bilanz_summe = bilanz_summe - betrag;
    } else {
        console.log(`Der Typ "${typ}" ist nicht bekannt`);
    }
};

const gesamtbilanz_ausgeben = function (gesamteinnahmen, gesamtausgaben, summe) {
    console.log(`
Einnahmen: ${gesamteinnahmen} Cent
Ausgaben: ${gesamtausgaben} Cent
Bilanz: ${summe} Cent
Bilianz ist positiv: ${summe >= 0}
`);
};

const eintrag_hinzufuegen = function () {
    eintrag_erfassen();
    eintag_ausgeben(titel, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verechnen(typ, betrag);
    gesamtbilanz_ausgeben(bilanz_einnahmen, bilanz_ausgaben, bilanz_summe);
};

eintrag_hinzufuegen();
eintrag_hinzufuegen();
eintrag_hinzufuegen();