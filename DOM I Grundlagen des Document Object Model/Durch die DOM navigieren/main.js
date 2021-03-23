"use strict";

let ul = document.querySelector("#navigation > ul");
// console.log(nav);

// kindelemente 

let child_notes = ul.childNodes; // alle kindelemente inkl. Text und Kommentarknoten
let childtren = ul.children; // alle kindelemente exkl. text und kommentaren
let first_child = ul.firstChild; // erste Kindelement inkl. Text und Kommentarknoten
let last_child = ul.lastChild;     // letztes Kindelement inkl. Text und Kommentarknoten
let first_element_child = ul.firstElementChild; // erste Kindelement exkl. Text und Kommentarknoten
let last_element_child = ul.lastElementChild;// letztes Kindelement exkl. Text und Kommentarknoten

// geschwisterelemente

let next_sibling = ul.nextSibling; // nächste geschwisteremente inkl. Text und Kommentarknoten
let previous_sibling = ul.previousSibling;// vorrangehende geschwisteremente inkl. Text und Kommentarknoten
let next_element_sibling = ul.firstElementChild.nextElementSibling; // nächste geschwisteremente exkl. Text und Kommentarknoten
let previous_element_sibling = ul.lastElementChild.previousElementSibling;// vorrangehende geschwisteremente exkl. Text und Kommentarknoten

// Elternelement

let parent_element = ul.parentElement; // Elternelement eines Elements

// allgemeines navigieren

let anker = ul.querySelectorAll("li > a");


console.log(child_notes)
console.log(childtren);
console.log(first_child);
console.log(last_child);
console.log(first_element_child);
console.log(last_element_child);
console.log(next_sibling);
console.log(previous_sibling);
console.log(next_element_sibling);
console.log(previous_element_sibling);
console.log(parent_element);
console.log(anker);