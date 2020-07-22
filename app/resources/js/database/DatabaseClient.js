import Config from "../Config.js";

function sendDatabaseRequest(route, method, callback) {
  let url = Config.dbBaseRoute + route;
  fetch(url, { method: method }).then(function(response) {
    return response.json();
  }).then(function(result) {
    callback(result);
  });
}

class DatabaseClient {
  //Implementieren Sie hier die Methoden, die sich um die entsprechenden HTTP-Requests kümmern. 
}

export default new DatabaseClient();