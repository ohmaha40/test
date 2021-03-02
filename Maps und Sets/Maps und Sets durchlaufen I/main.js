"use strict";

let mein_map = new Map();
mein_map.set("Test", "Wert von der Eigenschaft Test");
mein_map.set(23, "Wert von der Eigenschaft 13");
mein_map.set([], "Wert von der Eigenschaft []");
mein_map.set(function() {}, "Wert von der Eigenschaft Funktion");
mein_map.set({}, "Wert von der Eigenschaft Objekt");
console.log(mein_map);

let mein_set = new Set();
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function () {});
mein_set.add({});
console.log(mein_set);

mein_map.forEach(function (wert, eigenschaft) {
    console.log(wert);
    console.log(eigenschaft);
});

mein_set.forEach(function (wert, NULL) {
    console.log(wert);
});

for (let paar of mein_map) {
    console.log(paar);
}
for (let [eigenschaft, wert] of mein_map) {
    console.log(eigenschaft);
    console.log(wert);
}


for (let wert of mein_set) {
    console.log(wert);
}

