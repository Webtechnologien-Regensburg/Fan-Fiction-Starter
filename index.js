
/* 
 * 
 * Dieses Modul stellt den Einstiegspunkt in die gesamte Webanwendung und die server-seitige Komponente 
 * der App dar. In diesem Modul werden:
 * 
 * - die SQLite-Datenbank initialisiert
 * - die HTTP-Schnittstellen zum Zugriff bzw. zur Kommunikation zwischen Client und Server erstellt
 * - der Client über einen Webserver zugänglich gemacht
 */

// Import des express-Frameworks (vorher per npm installiert) für die Gestaltung der HTTP-Schnittstelle und das verfügbar machen des Clients
// im Browser
import express from "express";
// Import des selbst implementierten Datenbank-Modul in dem alle relevanten Datenbank-Operationen ausgeführt werden
import Database from "./lib/Database.js";
// Dateiname der SQLite-Datenbank, die in der Anwendung verwendet wird
const DATABASE_NAME = "fanFictionDatabase.sqlite",
    // Port, über den API und Client im Browser zugänglich sind
    HTTP_PORT = 8080;

var app;

function initDatabase() {
    // Öffnen bzw. Erstellen der Datenbank, ist dies erfolgreich, wird die als zweiter Parameter übergebene
    // Callback-Funktion ausgeführt und die restlichen Bestandteile der Anwendung werden initialisiert.
    Database.open(DATABASE_NAME, function() {
        console.log("Database opened and prepared with demo content");
        initExpress();
    });
}

// Erstellt eine einfache express-Anwendung, die den Client als Webseite anbietet und ein HTTP-Interface
// bereitstellt, über das der Client mit dem Server kommunizieren kann
function initExpress() {
    // Erstellen der express-App
    app = express();
    // Verweis auf Ordner mit Client-Code, der bereitgestellt werden kann
    app.use(express.static("app"));
    // Starten der express-Anwendung auf dem definierten Port
    app.listen(HTTP_PORT, function() {
        // Diese Funktion wird aufgerufen, sobald die express-App erfolgreich gestartet worden ist
        console.log("Kursbuch server started, listening on " + HTTP_PORT);
    });
}

initDatabase();