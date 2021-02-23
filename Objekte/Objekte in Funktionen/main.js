"use strict";

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

//eigener Versuch
const konto_log = function (inhaber_vorname, inhaber_nachname, kontostand) {
    console.log(`${inhaber_vorname} ${inhaber_nachname} hat ${kontostand} € auf seinem Konto!`);
};

konto_log(konto_2.inhaber.vorname, konto_2.inhaber.nachname, konto_2.kontostand);

//aus Lektions
const kontostand_ausgeben = function (konto) {
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand} € auf seinem Konto`);
};

kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);

// Challenge: Denkt euch noch ein paar hilfreiche Funktionen für unsere Konten aus.

//Kontostand aktuallisieren mit prompt 
const kontostand_aktu = function (auswahl,konto) {
    console.log(`Der alte Kontostand von ${konto.inhaber.vorname} ${konto.inhaber.nachname} lautet ${konto.kontostand}€`);
    if (auswahl === "Einnahme") {
        let einnahme_1 = parseInt(prompt("Bitte die Einnahme eingeben"));
        konto.kontostand = konto.kontostand + einnahme_1;
    } else if (auswahl === "Ausgabe"){
        let ausgabe_2 = parseInt(prompt("Bitte die Ausgabe eingeben"));
        konto.kontostand = konto.kontostand - ausgabe_2;
    } else {
        console.log("Ihre Eingabe war falsch");
    }
    console.log(`Der neue Kontostand von ${konto.inhaber.vorname} ${konto.inhaber.nachname} lautet ${konto.kontostand}€`);
};
let auswahl_konto;
let auswahl_kont = prompt("Mustermann/Musterfrau");
if (auswahl_kont === "Mustermann"){
    auswahl_konto = konto_1;
} else {
    auswahl_konto = konto_2;
}
kontostand_aktu(prompt("Einnahme/Ausgabe"), auswahl_konto);
