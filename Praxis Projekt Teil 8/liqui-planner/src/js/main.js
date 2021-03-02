"use strict"
/*
*           Praxis Projekt JavaScript
*           am 19.02.2021
*           
*           Keller Christian         
*/
const haushaltsbuch = {
    eintraege: [],
    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        summe: 0
    },
    eintrag_erfassen() {
        this.eintraege.push(
            {
                titel: prompt("Titel: ", "Einkaufen"),
                typ: prompt("Typ: ", "Einnahme oder Ausgabe"),
                betrag: parseInt(prompt("Betrag:", "in Cent")),
                datum: prompt("Datum: ", "jjjj-mm-tt")
            }
        );
    },
    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function (e) {
            console.log(`Titel: ${e.titel}\n`
                + `Typ: ${e.typ}\n`
                + `Betrag: ${e.betrag} Cent\n`
                + `Datum: ${e.datum}
                    `);
        })
    },
    gesamtbilanz_erstellen() {
        let gesamtbilanz_neu = {
            einnahmen: 0,
            ausgaben: 0,
            summe: 0
        };
        this.eintraege.forEach(function (e) {
            switch (e.typ) {
                case "Einnahme":
                    gesamtbilanz_neu.einnahmen += e.betrag;
                    gesamtbilanz_neu.summe += e.betrag;
                    break;
                case "Ausgabe":
                    gesamtbilanz_neu.ausgaben += e.betrag;
                    gesamtbilanz_neu.summe -= e.betrag;
                    break;
                default:
                    console.log(`Der Typ "${e.typ}" ist nicht bekannt`);
            }
        });
        this.gesamtbilanz = gesamtbilanz_neu;
    },
    gesamtbilanz_ausgeben() {
        console.log(`Einnahmen: ${this.gesamtbilanz.einnahmen} Cent\n`
            + `Ausgaben: ${this.gesamtbilanz.ausgaben} Cent\n`
            + `Bilanz: ${this.gesamtbilanz.summe} Cent\n`
            + `Bilianz ist positiv: ${this.gesamtbilanz.summe >= 0}
    `);
    },
    eintrag_hinzufügen() {
        let weiterer_eintrag = true;
        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Weiteren Eintrag erfassen?");
        }
    }
};

haushaltsbuch.eintrag_hinzufügen();
console.log(haushaltsbuch);