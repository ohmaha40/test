"use strict";

let variable = "Meine Variable";

// Regel 1: keine Leerzeichen
// let mein name = "Christian Keller"   	        (natürlich falsch)

// Regel 2: nur Buchstaben und Zahlen
// let name! = "Christian Keller";                  (natürlich falsch)

// Regel 3: erstes Zeichen immer ein Buchstaben     (natürlich falsch)
//let 9name = "Christian Keller";

// Regel 4: Groß und Kleischreibung ist erlaubt aber unterschiedliche Variablen
let name ="Keller Christian";
let Name ="Christian Keller";

console.log(name);
console.log(Name);

// Regel 5: es ist besser keine umlaute verwenden besser ae usw.
let hängematte = "ferien";
let haengematte = "ferien";

// Regel 6: _ sind als einziges Sonderzeichen erlaubt, statt Leerzeichen Cammelcase verwenden
let mein_name = "Keller Christian";
let meinName = "Christian Keller";             //Cammelcase

// Regel 7: keine Keywords als Variablennamen benutzen
// let let = "Keller Christian"; 