"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);

let clas_list = jumbo.classList;
console.log(clas_list);


// klassen hinzufügen
jumbo.classList.add("meine-klasse");
// klassen entferne
jumbo.classList.remove("jumbotron");
// klassen ersetzten
jumbo.classList.replace("meine-klasse", "deine-klasse");
// klassen auf vorhandensein testn
console.log(jumbo.classList.contains("deine-klasse"));
// klassen toogle´n (wenn da dann entfernt sonst erstellen (an ausschalter))
jumbo.classList.toggle("auch-eine-klasse");  
jumbo.classList.toggle("auch-eine-klasse");