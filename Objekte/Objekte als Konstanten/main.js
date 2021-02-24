"use strict";

const person = {
    vorname: "Christian",
    nachname: "Keller",
    alter: 40,
    ledig: false,
    partner: {
        vorname: "Jessica",
        nachname: "Keller",
        alter: 38
    },
    berufstaetig: true
};

person.vorname = "Christian Peter";
person.haarfarbe = "braun";
delete person.haarfarbe;
console.log(person);
