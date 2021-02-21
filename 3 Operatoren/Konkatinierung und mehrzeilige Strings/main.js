"use strict";

let vorname = "Christian";
let nachname = "Keller";
let alter = 40;

//Konkatinieren
let name = vorname + " " + nachname;
console.log(name);

let begruessung = "Hallo " +name + "!";
console.log(begruessung);

let zusammenfassung = name + " (" + alter + " Jahre)";
console.log(zusammenfassung);

//mehrzeiliger_String
let einzeiliger_String = "Das ist ien einzeiliger String";

let mehrzeiliger_String = "Ich will diesen Sting " + 
"\nin der nächsten Zeile forsetzen " +              // \n neue Zeile
"\n\tUnd wenn ich will " +                          // \t gibt Tab
"\nkann es auch so weiter gehen";
console.log(mehrzeiliger_String);