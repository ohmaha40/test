"use strict";
//Gültigkeitsbereich: Bereich in dem man Zugriff auf eine Variable hat

//Globale Variablen: Wird außerhalb aller Codeblöcke definiert und ist von überall zugänglich
//Lokale Variablen: Wird innerhalb eines Codeblockes definiert und ist nur in diesem 
// und in den Codeblöcken die darin enthalten sind Verfügbar


//Globalen Gültigkeitsbereich: variable_1
    // Lokaler Gültigkeitsbereich 1: variable_2
        //Lokatler Gültigkeitsbereich 1.1: variable_3
    //Lokaler Gültigkeitsbereich 2: variable_4

let variable_1 = "Variable 1";      //Globale Variable

const meine_funktion = function () {
    let variable_2 = "Variable_2";      //Lokale Variable

    if (true) {
        let variable_3 = "Variable 3";
        console.log(variable_1);
        console.log(variable_3);
        console.log(variable_2);
    }

    console.log(variable_1);
    console.log(variable_2);
    //console.log(variable_3);
};

meine_funktion ();

console.log(variable_1);
//console.log(variable_2);
//console.log(variable_3);

if (true){
    let variable_4 = "Variable 4";
    console.log(variable_4);
};
