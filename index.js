
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


function initExpress() {
    app = express();
    app.use(express.static("app"));
    app.listen(HTTP_PORT, function() {
        console.log("Kursbuch server started, listening on " + HTTP_PORT);
    });
}

initDatabase();