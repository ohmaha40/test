"use strict"
/*
*           Praxis Projekt JavaScript
*           am 19.02.2021
*           
*           Keller Christian
*   3
//objekt haushaltsbuch erstellen variable zu  objekt eigenschaft gesamtbilanz ein aus bilanz
//rest neuer eintrag
// fuktionen im objekt
*
*           
*/
// Titel Eingabe
//Meine gekürtze Lösung
// const haushaltsbuch = {
//     erfassen() {
//         this.neuer_eintrag.titel = prompt("Titel: ", "Einkaufen");
//         this.neuer_eintrag.typ = prompt("Typ: ", "Einnahme oder Ausgabe");
//         this.neuer_eintrag.betrag = parseInt(prompt("Betrag: ", "in Cent"));
//         this.neuer_eintrag.datum = prompt("Datum: ", "jjjj-mm-tt");
//         if (this.neuer_eintrag.typ === "Einnahme") {
//             this.gesamtbilanz.bilanz_einnahmen += this.neuer_eintrag.betrag;
//             this.gesamtbilanz.bilanz_summe += this.neuer_eintrag.betrag;
//         } else if (this.neuer_eintrag.typ === "Ausgabe") {
//             this.gesamtbilanz.bilanz_ausgaben += this.neuer_eintrag.betrag;
//             this.gesamtbilanz.bilanz_summe -= this.neuer_eintrag.betrag;
//         } else {
//             console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt`);
//         }
//         console.log(`
//         Titel: ${this.neuer_eintrag.titel}
//         Typ: ${this.neuer_eintrag.typ}
//         Betrag: ${this.neuer_eintrag.betrag} Cent
//         Datum: ${this.neuer_eintrag.datum}
//         `);
//         console.log(`
//         Einnahmen: ${this.gesamtbilanz.bilanz_einnahmen} Cent
//         Ausgaben: ${this.gesamtbilanz.bilanz_ausgaben} Cent
//         Bilanz: ${this.gesamtbilanz.bilanz_summe} Cent
//         Bilianz ist positiv: ${this.gesamtbilanz.bilanz_summe >= 0}
//     `);
//     },
//     neuer_eintrag: {
//         titel: null,
//         typ: null,
//         betrag: null,
//         datum: null
//     },
//     gesamtbilanz: {
//         bilanz_einnahmen: 0,
//         bilanz_ausgaben: 0,
//         bilanz_summe: 0
//     }
// };

// haushaltsbuch.erfassen();
// haushaltsbuch.erfassen();
// haushaltsbuch.erfassen();

// Lösung aus dem Video
const haushaltsbuch = {
    eintraege:[],
    gesamtbilanz: {
        bilanz_einnahmen: 0,
        bilanz_ausgaben: 0,
        bilanz_summe: 0
    },

// eintraege array  objekt  

    eintrag_erfassen () {
        this.eintraege.push(
            {
                titel: prompt("Titel: ", "Einkaufen"),
                typ: prompt("Typ: ", "Einnahme oder Ausgabe"),
                betrag: parseInt(prompt("Betrag:", "in Cent")),
                datum: prompt("Datum: ", "jjjj-mm-tt")
            }
        );
    },
    // eintrag_ausgeben () {
    //     console.log(`
    //     Titel: ${this.neuer_eintrag.titel}
    //     Typ: ${this.neuer_eintrag.typ}
    //     Betrag: ${this.neuer_eintrag.betrag} Cent
    //     Datum: ${this.neuer_eintrag.datum}
    //     `);
    // },
    // eintrag_mit_gesamtbilanz_verechnen () {
    //     switch (this.neuer_eintrag.typ) {
    //         case "Einnahme":
    //             this.gesamtbilanz.bilanz_einnahmen += this.neuer_eintrag.betrag;
    //             this.gesamtbilanz.bilanz_summe += this.neuer_eintrag.betrag;
    //             break;
    //         case "Ausgabe":
    //             this.gesamtbilanz.bilanz_ausgaben += this.neuer_eintrag.betrag;
    //             this.gesamtbilanz.bilanz_summe -= this.neuer_eintrag.betrag;
    //             break;
    //         default:
    //             console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt`);
    //     }
    // },
    // gesamtbilanz_ausgeben () {
    //     console.log(`
    //     Einnahmen: ${this.gesamtbilanz.bilanz_einnahmen} Cent
    //     Ausgaben: ${this.gesamtbilanz.bilanz_ausgaben} Cent
    //     Bilanz: ${this.gesamtbilanz.bilanz_summe} Cent
    //     Bilianz ist positiv: ${this.gesamtbilanz.bilanz_summe >= 0}
    // `);
    // },
    eintrag_hinzufügen () {
        this.eintrag_erfassen();
        // this.eintrag_ausgeben();
        // this.eintrag_mit_gesamtbilanz_verechnen();
        // this.gesamtbilanz_ausgeben();
    }
};
haushaltsbuch.eintrag_hinzufügen();
console.log(haushaltsbuch.eintraege);
haushaltsbuch.eintrag_hinzufügen();
console.log(haushaltsbuch.eintraege);
haushaltsbuch.eintrag_hinzufügen();
console.log(haushaltsbuch.eintraege);