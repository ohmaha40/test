"use strict"

// Funktionen
const log_it = function() {
    console.log("Funktionen sind voll super!");
};
const multiplizieren = function (a, b) {
    return a * b;
};
// Objekte
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
    einzahlen(e) {                  // Methode
        this.kontostand += e;  
    },
    auszahlen(a) {
        this.kontostand -= a;
    }
};
// Array
let produkte = [
    "Bananen", 
    "Äpfel", 
    "Schokolade", 
    "Brot", 
    "Müsli"
];
let waren = [
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
];
let autos_array = [
    {
        marke: "Audi",
        modell: "A3",
        farbe: "rot"
    },
    {
        marke: "Hyundai",
        modell: "i30 N",
        farbe: "blau"
    },
    {
        marke: "Ford",
        modell: "Fiesta ST",
        farbe: "Schwarz"
    }   
];
// Schleifen
let x = 0; // <-- Zählvariable
while (x < 5) {
    x++; // oder: x += 1 
    console.log(`While: ${x}`);  
}
for (let i = 0; i < 5; i++){
    if (i == 3) {
        continue;
    } else if (i == 4) {
        break;
    }
    console.log(i);
}
for ( let i = 0; i < personen.length; i++) {
    console.log(`Hallo ${personen[i]}!`);
    console.log(i);
}
        // Callback
let funktion_2 = function(f) {              // callback
    f();
    console.log("Ich bin Funktion 2!");  
};
funktion_2(function() {
console.log("Ich bin Funktion 1!");
});
// forEach 
zahlen.forEach(function (e, i, ) {
    console.log(e);
    console.log(`${e} in Index ${i}`);
});
// for in
for (let e in mein_array) {         // gibt die Eigenschaft aus (hier Index)
    console.log(e);
}
// for of
for (let e of mein_array) {         // for off nur bei Array, map?,set?
    console.log(e);
}
let paare = Object.entries(mein_objekt);        // entries gibt array zurück
let eigenschaft = Object.keys(mein_objekt);     // keys für eigenschaften
let werte = Object.values(mein_objekt);         // values gibt werte des Objekt zurück+
        //Kurzschreibweise
Object.values(mein_objekt).forEach(function(e) {
    console.log(e);
});
for (let e of Object.values(mein_objekt)) {
    console.log(e);
}
// array filtern
let kleinergleich20 = zahlen.filter(function (e) {  // filter
    if (e <= 20) {
        return true;
    }
// array sortieren
        // bsp für strings
let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspann"];
let neu_sortiert_worte = worte.sort();
console.log(neu_sortiert_worte);
        // bsp numbers
let zahlen = [1, 20, 2000, 1000000, 50];
let zahlen_neu = zahlen.sort(function (a, b) {
    return a - b;  // oder b - a rückwärts
});
console.log(zahlen_neu);
eintraege_sortieren () {
    this.eintraege.sort(function (a, b) {
        if (a.datum > b.datum) {
            return -1;
        } else if (a.datum < b.datum) {
            return 1;
        } else {
            return 0;
        }
    });
},
// Map
let mein_map = new Map();
mein_map.forEach(function (wert, eigenschaft) {
        console.log(wert);
        console.log(eigenschaft);
    });
for (let [eigenschaft, wert] of mein_map) {
    console.log(eigenschaft);
    console.log(wert);
}
// Sets
let mein_set = new Set();
mein_set.forEach(function (wert, NULL) {
    console.log(wert);
});
for (let wert of mein_set) {
    console.log(wert);
}
