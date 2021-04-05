"use strict";

let jumbo = document.querySelector(".jumbotron");
console.log(jumbo);

console.log(jumbo.innerHTML);  // html struktur  (DOM String)
console.log(jumbo.innerText);   // Text Elemente (auch kindelemente (gerenderte))
console.log(jumbo.textContent); // Text der Elemente aber ohne rücksicht. Jeder text