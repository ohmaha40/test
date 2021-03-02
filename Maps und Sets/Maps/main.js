"use strict";

let meine_map = new Map();


meine_map.set("Test", "Wert zur Eigenschaft Test");
meine_map.set(13, "Wert zur Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft []");
meine_map.set(function() {}, "Wert zur Eigenschaft Funktion");
meine_map.set({}, "Wert zur Eigenschaft {}");

console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));                 // Achtung leere Objekte, Array oder funktionen sind nie gleich
console.log(meine_map.get(function() {}));      // Achtung leere Objekte, Array oder funktionen sind nie gleich
console.log(meine_map.get({}));                 // Achtung leere Objekte, Array oder funktionen sind nie gleich

console.log(meine_map.has(13));
console.log(meine_map.has(15));
console.log(meine_map.has({}));                 // Achtung leere Objekte, Array oder funktionen sind nie gleich
console.log(meine_map.has("Test"));

meine_map.delete("Test");
//meine_map.clear();

console.log(meine_map.size);

console.log(meine_map);