"use strict";
/*
*               ==      gleich
*               !=      ungleich
*               >       größer als
*               <       kleiner als
*               >=      größer oder gleich als
*               <=      kleiner oder gleich als
*         
*/

console.log(42 == 42);              // true
console.log(42 == 43);              // false
console.log("-------------------------");

console.log(42 != 42);              // false
console.log(42 != 43);              // true
console.log("-------------------------");

console.log(42 > 42);               // false
console.log(42 > 43);               // false
console.log(43 > 42);               // true
console.log("-------------------------");

console.log(42 < 42);               // false
console.log(42 < 43);               // true
console.log(43 < 42);               //false
console.log("-------------------------");

console.log(42 >= 42);               // true
console.log(42 >= 43);               // false
console.log(43 >= 42);               // true
console.log("-------------------------");

console.log(42 <= 42);               // true
console.log(42 <= 43);               // true
console.log(43 <= 42);               //false
console.log("-------------------------");


// siehe Tabelle https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#ASCII-Tabelle
console.log("K" == "k");            // false
console.log("K" > "k");             // false
console.log("K" < "k");             // true
console.log("K" < "L");             // true
console.log("-------------------------");

console.log("Ruben" == "Ruben");     //true
console.log("Ruben" == "Ruben Winkler"); //false
console.log("Ruben" == "RUBEN");     // false (weil JavaScript jeden buchstaben nach der Tabelle abfragt)
console.log("-------------------------");

console.log("Ruben" != "Ruben");     //false
console.log("Ruben" != "Ruben Winkler");    //true
console.log("Ruben" != "RUBEN");     // true
console.log("-------------------------");

console.log("Ruben" < "Ruben");     //false
console.log("Ruben" < "Ruben Winkler");    //true
console.log("Ruben" < "RUBEN");     // false
console.log("-------------------------");

console.log("-------------------------");
console.log("Ruben" < "Christian");     // false
console.log("-------------------------");

console.log("Ruben" > "Ruben");     //false
console.log("Ruben" > "Ruben Winkler");    //false
console.log("Ruben" > "RUBEN");     // true
console.log("-------------------------");

console.log("Ruben" >= "Ruben");     //true
console.log("Ruben" >= "Ruben Winkler");    //false
console.log("Ruben" >= "RUBEN");     // true
console.log("-------------------------");

console.log("Ruben" <= "Ruben");     //true
console.log("Ruben" <= "Ruben Winkler");    //true
console.log("Ruben" <= "RUBEN");     // false
console.log("-------------------------");

console.log("42" === 42);          // Strict gleich
console.log("42" !== 42);          // strict ungleich