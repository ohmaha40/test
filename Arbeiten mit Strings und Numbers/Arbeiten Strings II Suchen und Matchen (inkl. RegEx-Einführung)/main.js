"use strict";

let s = " Lorem ipsum dolor sit amet ipsum. ";

// console.log(s.length);
// console.log(s.indexOf("ipsum"));        // erste String
// console.log(s.indexOf("ipsum", 20));    // erste String nach start- index hier 20
// console.log(s.lastIndexOf("ipsum"));    // erste String von hinten (auch start index möglich)
// console.log(s.includes("sit"));         // true wenn vorhanden (auch start index möglich)
// console.log(s.toLocaleLowerCase());     // schreibt alles klein
// console.log(s.toLocaleUpperCase());     // schreibt alles groß
// console.log(s.trim());                  // entfernt unnötige leerzeichen
// console.log(s.repeat(100));             // wiederholen

let regex = /i\w{4}/g;      //i für den buchstaben \w wort {4} 4 stellen die folgen sollen /g dann ganzer string (webseite regex101)

console.log(s.search(regex));
console.log(s.replace(regex, "opsum"));
console.log(s.match(regex));