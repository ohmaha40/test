"use strict";

let mein_set = new Set();

mein_set.add("Test");
mein_set.add("Test");       // in Sets kann jeder Wert nur einmal vorhanden sein
mein_set.add(13);
mein_set.add([]);
mein_set.add([]);
mein_set.add(function () {});
mein_set.add(function () {});
mein_set.add({});
mein_set.add({});


console.log(mein_set.has("Test"));
console.log(mein_set.has("Beispiel"));
console.log(mein_set.has(13));
console.log(mein_set.has(7 + 6));
console.log(mein_set.has({}));          // Achtung leere Objekte, Array oder funktionen sind nie gleich

mein_set.delete("Test");
//mein_set.clear();

console.log(mein_set.size);

console.log(mein_set);