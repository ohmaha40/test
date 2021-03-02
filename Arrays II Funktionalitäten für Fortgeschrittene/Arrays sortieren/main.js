"use strict";

// let zahlen = [1, 20, 2000, 1000000, 50];

// let neu_sortiert = zahlen.sort();

// console.log(neu_sortiert);

// Die sort()-Methode für Arrays wandelt Elemente des Arrays standardmäßig in Strings um und vergleicht diese
// bsp für strings
let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspann"];
let neu_sortiert_worte = worte.sort();
console.log(neu_sortiert_worte);

// Für das sortieren von zahlen-Arrays sollte deshalb eine Vergleichsfunktion genutzt werden
// Ist Rückgabewert der Vergleichsfunktion < 0, wird a auf einen niedrigeren Index als b gesetzt 
// Ist Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt 
// Ist Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist 
// return a - b sortiert in aufsteigender Reihenfolge
// return b - a sortiert in absteigender Reihenfolge

// bsp numbers
let zahlen = [1, 20, 2000, 1000000, 50];
let zahlen_neu = zahlen.sort(function (a, b) {
    return a - b;  // oder b - a rückwärts
});
console.log(zahlen_neu);

