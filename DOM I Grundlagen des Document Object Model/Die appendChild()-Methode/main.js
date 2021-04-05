"use strict";

let div = document.createElement("div");
div.setAttribute("id", "meine_id");
div.setAttribute("class", "meine_klasse");
let text = document.createTextNode("Lorem ipsum dolor sit amet");

// appentChield()- Methode: fügt ein Element als letztes Kindelement in ein Elternelement ein
// Syntax: elernelemet.appendChield(kindelement);
// existiert das Kindelement im Elternelement bereits, wird es entfernt und stattdessen
// als letztes Kindelement wieder iengefügt

// Text zum div_Element hinzugefügt
div.appendChild(text);

// Section im Jumbotron selektiert
let jumbo = document.querySelector(".jumbotron > section");
// div Element zur Section im Jumbotron hinzugefügt
jumbo.appendChild(div);
// erstes Listenelement in ul in Navigation selektiert
let li = document.querySelector("#navigation > ul > li");
// ul in Navigation selektiert
let ul = document.querySelector("#navigation > ul");
// erstes Listenelement  der ul erneut in  ul eingefügt
// (allerdings durch appendChield()-Methode als letztes Kindelement)
ul.appendChild(li);

