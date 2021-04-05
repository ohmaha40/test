"use strict";

let nav = document.querySelector("#navigation");
nav.remove();

let jumbo = document.querySelectorAll(".jumbotron");
//jumbo.remove();
//console.log(jumbo);
jumbo.forEach( function(e) {
  e.remove();  
});