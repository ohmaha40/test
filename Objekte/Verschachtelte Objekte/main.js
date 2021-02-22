"use strict";

// let iban = "DE6254642112384741312";
// let bic = "WEASE5PXNX";
// let kontostand = 3500;
// let aktiv = true;

// Inhaber-Objekt (Vorname, Nachname, geschlecht, Alter)

// let inhaber_1 = {
//     vorname: "Christian",
//     nachname: "Keller",
//     geschlecht: "männlich",
//     alter: 40
// };

// console.log(inhaber_1);

// let inhaber_2 = {
//     vorname: "Max",
//     nachname: "Mustermann",
//     geschlecht: "männlich",
//     alter: 25
// };

// console.log(inhaber_2);

let konto_1 = {
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

console.log(konto_1);

let konto_2 = {
    iban: "DE62546421123847413332",
    bic: "WEASE5PXNX",
    inhaber: {
        vorname: "Maria",
        nachname: "Musterfrau",
        geschlecht: "weiblich",
        alter: 18
    },
    kontostand: 5500,
    aktiv: true
};

console.log(konto_2);

/*
    Objekt für ein Auto anlegen:

    -  Marke
    -   Modell
    -   Kraftstoffart
    -   Kilometerstand
    -   Austattung
        -   Navigationssystem
        -   Klimaanlage
        -   Sitzheizung
        -   Tempomat
        -   Panoramadach
    -   Zustand
    -   Preis

*/

let auto = {
    marke: "Audi",
    modell: "A3",
    kraftstoffart: "Benzin",
    kilometerstand: 120465,
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: false,
        tempomat: false,
        panoramadach: false
    },
    zustand: "gebraucht",
    preis: 23500
};

console.log(auto);