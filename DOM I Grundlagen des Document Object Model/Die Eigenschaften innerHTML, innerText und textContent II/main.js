"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);

// console.log(jumbo.innerHTML);  // html struktur  (DOM String)
// console.log(jumbo.innerText);   // Text Elemente (auch kindelemente (gerenderte))
// console.log(jumbo.textContent); // Text der Elemente aber ohne rücksicht. Jeder text

let string_1 = "";
let string_2 = "<header><h2>Lorem ipsum dolor sit amet</h2></header>";
let string_3 = "<p>Lorem ipsum dolor sit amet</p>";
let string_4 = "Lorem ipsum dolor sit amet";

// jumbo.innerHTML = string_1; // ersetzt das elemet auf string_1 (in diesem Fall auf leer)
// jumbo.innerHTML = string_2;
jumbo.innerHTML += string_3; // anhängen 
// jumbo.innerText = string_1;  // ersetzt das elemet auf string_1 (in diesem Fall auf leer)
// jumbo.innerText = string_2;     // Funktiniert nur mit texten HTML elemete werden nicht beachtet!
// jumbo.innerText += string_3;     
// jumbo.innerText += string_4;
// jumbo.textContent = string_1;   // ersetzt das elemet auf string_1 (in diesem Fall auf leer)
// jumbo.textContent = string_2;   // Funktiniert nur mit texten HTML elemete werden nicht beachtet!
// jumbo.textContent += string_3;