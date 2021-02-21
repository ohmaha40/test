"use strict";

let vor = "Vor dem prompt...";
console.log(vor);

// Benutzereingabe
//prompt("Wie ist dein Name?", "Peter Parker");  prompt hält js ablauf an!

let name = prompt("Wie ist dein Name?", "default"); //bei Abbrechen null
console.log(name);

let nach = "Nach dem prompt....";
console.log(nach);