"use strict";

// let auto_1 = {
//     marke: "Audi",
//     modell: "A3",
//     farbe: "rot"
// };

// let auto_2 = {
//     marke: "Hyundai",
//     modell: "i3ß N",
//     farbe: "blau"
// };

// let auto_3 = {
//     marke: "Ford",
//     modell: "Fiesta ST",
//     farbe: "Schwarz"
// };

// let autos = [
//     auto_1,
//     auto_2,
//     auto_3
// ];

// console.log(autos);

let autos_array = [
    {
        marke: "Audi",
        modell: "A3",
        farbe: "rot"
    },
    {
        marke: "Hyundai",
        modell: "i30 N",
        farbe: "blau"
    },
    {
        marke: "Ford",
        modell: "Fiesta ST",
        farbe: "Schwarz"
    }   
];

console.log(autos_array);
console.log(autos_array[0]);
console.log(autos_array[1]);
console.log(autos_array[2]);

console.log(autos_array[0].marke);
console.log(autos_array[1].marke);
console.log(autos_array[2].marke);

console.log(autos_array[0].modell);
console.log(autos_array[1].modell);
console.log(autos_array[2].modell);

console.log(autos_array[0].farbe);
console.log(autos_array[1].farbe);
console.log(autos_array[2].farbe);

console.log(autos_array[0]["marke"]);
console.log(autos_array[1]["marke"]);
console.log(autos_array[2]["marke"]);

console.log(autos_array[0]["modell"]);
console.log(autos_array[1]["modell"]);
console.log(autos_array[2]["modell"]);

console.log(autos_array[0]["farbe"]);
console.log(autos_array[1]["farbe"]);
console.log(autos_array[2]["farbe"]);


let waren = {
    obst:
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    gemuese:
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    brot:
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
};

console.log(waren.obst);
console.log(waren.gemuese);
console.log(waren.brot);

console.log(waren.obst[0]);
console.log(waren.obst[1]);
console.log(waren.obst[2]);

console.log(waren.gemuese[0]);
console.log(waren.gemuese[1]);
console.log(waren.gemuese[2]);

console.log(waren.brot[0]);
console.log(waren.brot[1]);
console.log(waren.brot[2]);
