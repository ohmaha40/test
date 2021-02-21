"use strict";

let vorname = "Christian";
let nachname = "Keller";
let alter = 40;

let name = vorname + " " + nachname;
console.log(name);

//Template String
let begruessung = `Hallo ${name}!`;
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);

//mehrzeilige Template Strings
let mehrzeilige_template_string = `Hallo ${name}! 
Du bist ${alter} Jahre alt. 
Wie geht es dir?`;
console.log(mehrzeilige_template_string);

// können auch komkatiniert werden
let mehrzeilige_template_string_2 = `Hallo ${name}! `+
`Du bist ${alter} Jahre alt. `+
`Wie geht es dir?`;
console.log(mehrzeilige_template_string_2);