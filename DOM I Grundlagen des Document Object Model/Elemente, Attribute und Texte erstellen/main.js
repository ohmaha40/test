"use strict";

// Element erstellen
let div = document.createElement("div");
// console.log(div);

// Attribut erstllen
let attr = document.createAttribute("id");
attr.value = "meine ID";
// console.log(attr);

// Attribut einem Element hinzufügen
div.setAttributeNode(attr);
// console.log(div);

// Attribut erstellen und hinzufügen
div.setAttribute("class", "meine_ Klasse");

let text = document.createTextNode("Lorem ipsum dolor sit amet");
console.log(text);
console.log(div);

