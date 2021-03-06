"use strict";

let d = new Date();

// setzen
d.setFullYear(1993);
d.setMonth(/*index*/0);
d.setDate(16);
d.setHours(9);
d.setMinutes(32);
d.setSeconds(12);
d.setMilliseconds(111);

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());



console.log(d);


let d_utc = new Date();

// setzen
d_utc.setUTCFullYear(1993);
d_utc.setUTCMonth(/*index*/0);
d_utc.setUTCDate(16);
d_utc.setUTCHours(9);
d_utc.setUTCMinutes(32);
d_utc.setUTCSeconds(12);
d_utc.setUTCMilliseconds(111);

console.log(d_utc);

console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getUTCHours());
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());
console.log(d.getUTCMilliseconds());

let d_unix = new Date();
d_unix.setTime(1614889640000);
console.log(d_unix);
console.log(d_unix.getTime());
let da = new Date();
console.log(da.getMonth());