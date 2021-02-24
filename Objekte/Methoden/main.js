"use strict";

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
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;  
    },
    auszahlen(a) {
        this.kontostand -= a;
    }
};

konto.einzahlen(2000);
console.log(konto.kontostand);
konto.auszahlen(2000);
console.log(konto.kontostand);

// challenge: Methode in Onbjekt einbauen

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18,
    verarbeiten() {
        
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}`
        }; 
    }
};

console.log(person.verarbeiten());