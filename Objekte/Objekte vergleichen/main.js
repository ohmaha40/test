"use strict";

let auto_1 = {
    marke: "BMW",
    modell: "i8"
};

let auto_2 = {
    marke: "Tesla",
    modell: "Model X"
};

let auto_3 = {
    marke: "Tesla",
    modell: "Model X"
};

console.log(auto_1 == auto_2);
console.log(auto_2 == auto_3);
console.log(auto_3 == auto_3);
console.log({} == {});