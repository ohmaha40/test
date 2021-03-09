"use strict";

console.log(Math.random());  // Random zwischen 0 und 1(1 nie)

console.log(Math.floor(Math.random() * (12 + 1))); // von 0 - 12 da random 1 nie 1 wird einfach +1 und dann immer abrunden


let minimum = 0;
let maximum = 255;
 console.log(Math.floor(
     Math.random() * ((maximum - minimum) + 1) + minimum)  // ergibt minimum 40
 );

function zufallszahl(min, max) {
    return  Math.floor(Math.random() * ((max - min) + 1) + min);
}

console.log(zufallszahl(minimum, maximum));
