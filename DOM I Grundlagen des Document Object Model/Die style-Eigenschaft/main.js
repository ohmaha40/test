"use strict";

let jumbo = document.querySelector(".jumbotron");
// Das CSSStyleDeclaration ausgeben
console.log(jumbo.style);
// Inline-Style auslesn
console.log(jumbo.style.backgroundColor);
// Inline-Styles ändern
jumbo.style.backgroundColor = "blue";
jumbo.style.width = "85%";
jumbo.style.height = "800px";
jumbo.style.fontSize = "20px";