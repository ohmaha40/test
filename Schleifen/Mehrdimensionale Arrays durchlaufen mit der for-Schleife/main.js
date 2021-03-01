"use strict";

let waren = [
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
];

for ( let i = 0; i < waren.length; i++) {
    for (let j = 0; j < waren[i].length; j++) {
        if (waren[i][j] === "Möhren" || waren[i][j] === "Sellerie"){
            console.log(`Ich mag ${waren[i][j]} nicht!`)
        } else {
        console.log(`Ich mag ${waren[i][j]}`);
        }
    }
}