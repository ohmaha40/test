"use strict";

let meine_variable = "Christian";

let mein_objekt = {
    zahl: 5000
};

const meine_funktion = function (v, o) {
    v = "Jessica";
    o.zahl = 2500;
    
}; 

meine_funktion(meine_variable, mein_objekt);

console.log(meine_variable);
console.log(mein_objekt.zahl);


// val-by-value (dt.: Übergabe als Wert): gilt für primitive Datentypen (String, Number, Boolean)
// cal-by-reference (dt.: Übergabe als Verweis(Rückvereweis): gilt für komplexere Datentypen (Objekte, Funktionen, Arrays))

let konto = {
    iban: "DE6254642112384741312",
    bic: "WEASE5PXNX",
    inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        geschlecht: "männlich",
        alter: 25
    },
    kontostand: 3500,
    aktiv: true
};

// 2 funktionen geld einzahlen geld auszahlen

const geld_einzahlen = function (a, b) {
    console.log(`Alter Kontostand ${a.kontostand}€`);
    a.kontostand += b;  //kurzschreibweise 
    console.log(`Neuer Kontostand ${a.kontostand}€`);
};
const geld_auszahlen = function (a, b) {
    console.log(`Alter Kontostand ${a.kontostand}€`);
    a.kontostand -= b;  //kurzschreibweise 
    console.log(`Neuer Kontostand ${a.kontostand}€`);
};

geld_einzahlen(konto, 2000);
geld_auszahlen(konto, 1500);
