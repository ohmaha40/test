"use strict";

let personen = [
    "Peter",
    "Anna",
    "Marc",
    "Maximilian",
    "Mia",
    "Christian",
    "Jessica",
    "Ben"
];

for ( let i = 0; i < 5; i++) {
    console.log(`Hallo ${personen[i]}!`);
    console.log(i);
}
console.log(`Die For-SChleife ist beendet`);

for ( let i = 0; i < personen.length; i++) {
    console.log(`Hallo ${personen[i]}!`);
    console.log(i);
}
console.log(`Die For-SChleife ist beendt`);

for ( let i = personen.length - 1; i >= 0; i--) {
    console.log(`Tschüss ${personen[i]}!`);
    console.log(i);
}
console.log(`Die For-SChleife Rückwärts ist beendt`);