"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Marcel",
    "Mia"
];

// includes(): Durchsucht das Array ab einen Startindex nach einem Wert und gibt true zurück, wenn
// das Element gefunden wurde, bzw. wenn es nicht gefunden wurde
// Syntax: includes(suchwert[, startindex])
// nicht destruktiv

console.log(personen.includes("Marcel"));
console.log(personen.includes("Marcel", 1));
console.log(personen.includes("Marcel", 2));


// indexOf(): Durchsucht das Array ab einen Startindex nach einem Wert und gibt den Index der ersten Fundstelle
// zurück, wenn der Wert gefunden wurde oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: indexOf(Suchwert[, Startindex])
// nicht destruktiv

console.log(personen.indexOf("Marcel"));
console.log(personen.indexOf("Marcel", 1));
console.log(personen.indexOf("Marcel", 2));

// lastIndexOf(): Durchsucht das Array ab einem Startindex rückwärts nach einem Wert und gibt den Index der ersten Fundstelle
// zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: lastIndexOf(Suchwert[, Startindex])
// nicht destruktiv

console.log(personen.lastIndexOf("Marcel"));
console.log(personen.lastIndexOf("Marcel", 4));
console.log(personen.lastIndexOf("Marcel", 0));

