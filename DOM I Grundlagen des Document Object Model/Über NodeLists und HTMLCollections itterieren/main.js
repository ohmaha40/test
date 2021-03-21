"use strict";
// HTML-Collections

let html_collektion_1 = document.getElementsByClassName("jumbotron");
let html_collektion_2 = document.getElementsByTagName("li");
//for Schleife
for (let i = 0; i < html_collektion_1.length; i++){
    console.log(html_collektion_1[i]);
}
for (let i = 0; i < html_collektion_2.length; i++){
    console.log(html_collektion_2[i]);
}
// for of Schleife
for (let e of html_collektion_1) {
    console.log(e);
}
for (const e of html_collektion_2) {
    console.log(e);
}

// Node-List
//for schleife
let node_list = document.querySelectorAll("p");
console.log(node_list);
for (let i = 0; i< node_list.length; i++) {
    console.log(node_list[i]);
}
// for of schleife
for (const e of node_list) {
    console.log(e);    
}
// forEach Methode
node_list.forEach(e => {
    console.log(e);
});