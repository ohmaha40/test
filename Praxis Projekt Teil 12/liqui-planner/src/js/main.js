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
        neuer_eintrag.set("titel", (prompt("Titel: ", "Einkaufen")).trim());
        neuer_eintrag.set("typ", prompt("Typ: ", "Einnahme oder Ausgabe").trim());
        neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt("Betrag:", "in Euro, ohne € Zeichen").trim()));
        neuer_eintrag.set("datum", this.datum_verarbeiten(prompt(("Datum (jjjj-mm-tt):").trim())));
        neuer_eintrag.set("timestamp", Date.now());
        this.eintraege.push(neuer_eintrag);
        console.log(this.eintraege);
    },
    betrag_verarbeiten (betrag_eingabe) {
        if (this.betrag_validieren(betrag_eingabe)) {
        return parseFloat(betrag_eingabe.replace(",", "."))* 100;
        } else {
            console.log(`Ungültiger Betrag ${betrag_eingabe} €`);
            return false;
        }
    },
    betrag_validieren (eingabe) {
        if ( eingabe.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
            return true;
        } return false;
    },
    datum_verarbeiten (datum_eingabe) {
        if (this.datum_validieren(datum_eingabe)) {
            return new Date(`${datum_eingabe} 00:00:00`);
            } else {
                console.log(`Ungültiges Datum ${datum_eingabe} €`);
                return false;
            }
    },
    datum_validieren (datum_eingabe) {
        if (datum_eingabe.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
            return true;
        } return false;
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
                + `Betrag: ${(e.get("betrag") / 100).toFixed(2)} €\n`
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
        console.log(`Einnahmen: ${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2)} €\n`
            + `Ausgaben: ${(this.gesamtbilanz.get("ausgaben")/100).toFixed(2)} €\n`
            + `Bilanz: ${(this.gesamtbilanz.get("summe")/100).toFixed(2)} €\n`
            + `Bilianz ist positiv: ${(this.gesamtbilanz.get("summe")/100) >= 0}
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
