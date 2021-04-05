"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein_listenelement");

let a = document.createElement("a");
a.setAttribute("id", "mein_amkerelememt");
a.setAttribute("href", "#");

let text = document.createTextNode("Element");

a.appendChild(text);
li.appendChild(a);

let liste = document.querySelector("#navigation > ul");
// liste.appendChild(li);


// mögliche einsatzmöglichkeiten
// 1. beforebegin
// 2. afterbegin
// 3. beforeend
// 4. afterend
//liste.insertAdjacentElement("beforebegin", li);
//liste.insertAdjacentElement("afterbegin", li);
//liste.insertAdjacentElement("beforeend", li);
//liste.insertAdjacentElement("afterend", li);

let dom_string = "<li id=\"mein_listenelement\"><a id=\"mein_ankerelement\" href=\"#\">Element</a></li>";
//liste.insertAdjacentHTML("beforebegin", dom_string);
//liste.insertAdjacentHTML("afterbegin", dom_string);
//liste.insertAdjacentHTML("beforeend", dom_string);
//liste.insertAdjacentHTML("afterend", dom_string);

let text_2 = "Lorem ipsum dolor sit amet";
//liste.insertAdjacentText("beforebegin", text_2);
//liste.insertAdjacentText("afterbegin", text_2);
//insertAdjacentText("beforeend", text_2);
//liste.insertAdjacentText("afterend", text_2);