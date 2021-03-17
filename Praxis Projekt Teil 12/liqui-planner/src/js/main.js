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
    fehler: [],
    eintrag_erfassen() {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", this.titel_verarbeiten(prompt("Titel: ", "Einkaufen")));
        neuer_eintrag.set("typ", this.typ_verarbeiten(prompt("Typ: ", "Einnahme oder Ausgabe")));
        neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt("Betrag:", "in Euro, ohne € Zeichen")));
        neuer_eintrag.set("datum", this.datum_verarbeiten(prompt(("Datum (jjjj-mm-tt):"))));
        neuer_eintrag.set("timestamp", Date.now());
        if (this.fehler.length === 0) {
            this.eintraege.push(neuer_eintrag);
        } else {
            console.log("Folgende Fehler wurden gefunden:");
            this.fehler.forEach(function (fehler) {
                console.log(fehler);
            });
        }
    },
    titel_verarbeiten(titel) {
        titel = titel.trim();
        if (this.titel_validieren(titel)) {
            return titel;
        } else {
            this.fehler.push(`Kein Titel angegeben`);
        }
    },
    titel_validieren(titel) {
        if (titel !== "") {
            return true;
        } return false;
    },
    typ_verarbeiten(typ) {
        typ = typ.trim().toLocaleLowerCase();
        if (this.typ_validieren(typ)) {
            return typ;
        } else {
            this.fehler.push(`Ungültiger Betrag ${typ} €`);
        }
    },
    typ_validieren(typ) {
        if (typ.match(/^(?:einnahme|ausgabe)?$/) !== null) {
            return true;
        } return false;
    },
    betrag_verarbeiten(betrag_eingabe) {
        betrag_eingabe = betrag_eingabe.trim();
        if (this.betrag_validieren(betrag_eingabe)) {
            return parseFloat(betrag_eingabe.replace(",", ".")) * 100;
        } else {
            this.fehler.push(`Ungültiger Betrag ${betrag_eingabe} €`);
        }
    },
    betrag_validieren(eingabe) {
        if (eingabe.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
            return true;
        } return false;
    },
    datum_verarbeiten(datum_eingabe) {
        datum_eingabe = datum_eingabe.trim();
        if (this.datum_validieren(datum_eingabe)) {
            return new Date(`${datum_eingabe} 00:00:00`);
        } else {
            this.fehler.push(`Ungültiges Datum ${datum_eingabe} €`);
        }
    },
    datum_validieren(datum_eingabe) {
        if (datum_eingabe.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
            return true;
        } return false;
    },
    eintraege_sortieren() {
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
                case "einnahme":
                    gesamtbilanz_neu.set("einnahmen", gesamtbilanz_neu.get("einnahmen") + e.get("betrag"));
                    gesamtbilanz_neu.set("summe", (gesamtbilanz_neu.get("summe") + e.get("betrag")));
                    break;
                case "ausgabe":
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
            + `Ausgaben: ${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2)} €\n`
            + `Bilanz: ${(this.gesamtbilanz.get("summe") / 100).toFixed(2)} €\n`
            + `Bilianz ist positiv: ${(this.gesamtbilanz.get("summe") / 100) >= 0}
    `);
    },
    eintrag_hinzufügen() {
        let weiterer_eintrag = true;
        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            if (this.fehler.length === 0) {
                this.eintraege_sortieren();
                this.eintraege_ausgeben();
                this.gesamtbilanz_erstellen();
                this.gesamtbilanz_ausgeben();
            } else {
                this.fehler = [];
            }
            weiterer_eintrag = confirm("Weiteren Eintrag erfassen?");

        }
    }
};

haushaltsbuch.eintrag_hinzufügen();
console.log(haushaltsbuch);
