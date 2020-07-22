import express from "express";
import Database from "./lib/Database.js";

//Speichern Sie hier den Namen Ihrer Datenbank, die Sie in einem Ordner namens "data" abgelegt haben.
const DATABASE_NAME = "",
  HTTP_PORT = 8080;

var app;

function initDatabase() {
  Database.open(DATABASE_NAME, function() {
    initExpress();
  });
}

// Erstellen Sie im Client einen HTTP-Request für die Route http://localhost/db/test um
// zu testen, ob die Verbindung zu diesem Server funktioniert. Im besten Fall wird dadurch 
// diese Callback-Methode ausgelöst und das Objekt msg als JSON-String an den Client übergeben.
function onTestRequest(request, response) {
	let msg = {
		text: "It Works",
	};
	response.status(200).send(JSON.stringify(msg));
}

function initExpress() {
  app = express();
  app.use(express.static("app"));
  // Test-Route für Server-Client-Verbindung (siehe oben), bitte vor Abgabe entfernen!
  app.get("/db/test", onTestRequest);
  app.listen(HTTP_PORT, function() {
    // eslint-disable-next-line no-console 
    console.log("Fan Fiction Explorer Server started, listening on " + HTTP_PORT);
  });
}

initDatabase();