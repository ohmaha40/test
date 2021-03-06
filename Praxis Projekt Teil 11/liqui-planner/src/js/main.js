"use strict"
/*
*           Praxis Projekt JavaScript
*           am 19.02.2021
*           
*           Keller Christian         

Map anstatt Objekte
*/
const haushaltsbuch = {
    eintraege: [], 
    gesamtbilanz: new Map(),
    eintrag_erfassen() {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", prompt("Titel: ", "Einkaufen"));
        neuer_eintrag.set("typ", prompt("Typ: ", "Einnahme oder Ausgabe"));
        neuer_eintrag.set("betrag", parseInt(prompt("Betrag:", "in Cent")));
        neuer_eintrag.set("datum", new Date(prompt("Datum (jjjj-mm-tt):") + " 00:00:00"));
        neuer_eintrag.set("timestamp", Date.now());
        this.eintraege.push(neuer_eintrag);
        console.log(this.eintraege);
    },
    eintraege_sortieren () {
        this.eintraege.sort(function (a, b) {
            if (a.get("datum") > b.get("datum")) {
                return -1;
            } else if (a.get("datum") < b.get("datum")) {
                return 1;
            } else {
                return 0;
            }
        });
    },
    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function (e) {
            console.log(`Titel: ${e.get("titel")}\n`
                + `Typ: ${e.get("typ")}\n`
                + `Betrag: ${e.get("betrag")} Cent\n`
                + `Datum: ${e.get("datum").toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                })}\n`
                + `Timestamp: ${e.get("timestamp")}
                    `);
        })
    },
    gesamtbilanz_erstellen() {
        let gesamtbilanz_neu = new Map();
        gesamtbilanz_neu.set("einnahmen", 0);    
        gesamtbilanz_neu.set("ausgaben", 0);
        gesamtbilanz_neu.set("summe", 0);
        this.eintraege.forEach(function (e) {
            switch (e.get("typ")) {
                case "Einnahme":
                    gesamtbilanz_neu.set("einnahmen", gesamtbilanz_neu.get("einnahmen") + e.get("betrag"));
                    gesamtbilanz_neu.set("summe", (gesamtbilanz_neu.get("summe") + e.get("betrag")));
                    break;
                case "Ausgabe":
                    gesamtbilanz_neu.set("ausgaben", gesamtbilanz_neu.get("ausgaben") + e.get("betrag"));                  
                    gesamtbilanz_neu.set("summe", gesamtbilanz_neu.get("summe") - e.get("betrag")); 
                    break;
                default:
                    console.log(`Der Typ "${e.get("typ")}" ist nicht bekannt`);
                    break;
            }
        });
        this.gesamtbilanz = gesamtbilanz_neu;
    },
    gesamtbilanz_ausgeben() {
        console.log(`Einnahmen: ${this.gesamtbilanz.get("einnahmen")} Cent\n`
            + `Ausgaben: ${this.gesamtbilanz.get("ausgaben")} Cent\n`
            + `Bilanz: ${this.gesamtbilanz.get("summe")} Cent\n`
            + `Bilianz ist positiv: ${this.gesamtbilanz.get("summe") >= 0}
    `);
    },
    eintrag_hinzufügen() {
        let weiterer_eintrag = true;
        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_sortieren();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Weiteren Eintrag erfassen?");
        }
    }
};

haushaltsbuch.eintrag_hinzufügen();
console.log(haushaltsbuch);