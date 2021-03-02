"use strict";

let mein_objekt = {
    name: "Max",
    vorname: "Mustermann",
    alter: 26
};

// So bitte nicht!
// for (let e in mein_objekt) {
//     console.log(mein_objekt[e]);
// }

let paare = Object.entries(mein_objekt);        // entries gibt array zurück
console.log(paare);

for (let paar of paare) {
    console.log(paar);
    for (let e of paar) {
        console.log(e);
    }
}

let eigenschaft = Object.keys(mein_objekt);     // keys für eigenschaften
console.log(eigenschaft);

for (let e of eigenschaft) {
    console.log(e);
}
eigenschaft.forEach(function (e) {
    console.log(e);
});

let werte = Object.values(mein_objekt);         // values gibt werte des Objekt zurück
console.log(werte);
for (let e of werte) {
    console.log(e);
}
werte.forEach(function (e) {
    console.log(e);
});

// kurzschreibweise
Object.values(mein_objekt).forEach(function(e) {
    console.log(e);
});
for (let e of Object.values(mein_objekt)) {
    console.log(e);
}