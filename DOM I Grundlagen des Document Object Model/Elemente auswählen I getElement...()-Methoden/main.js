"use strict";

//Element nach ID auswählen
let el_by_id_1 = document.getElementById("navigation");
console.log(el_by_id_1);

let el_by_id_2 = document.getElementById("test");
console.log(el_by_id_2);
//Elemente nach Klassen auswählen
let el_by_class_1 = document.getElementsByClassName("jumbotron");
console.log(el_by_class_1);

let el_by_class_2 = document.getElementsByClassName("test");
console.log(el_by_class_2);
// console.log(el_by_class_2.length == 0);
//Elemente nach Element namen (Tag-Namen) auswählen
let el_by_tag_1 = document.getElementsByTagName("p");
console.log(el_by_tag_1);
let el_by_tag_2 = document.getElementsByTagName("test");
console.log(el_by_tag_2);
// console.log(el_by_tag_2.length == 0);