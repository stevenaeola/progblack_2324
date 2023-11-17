const express = require("express");
const app = express();

let facts = [
    "Played for St Kilda",
    "Was born in 1929"
];

app.get("/fact", function (request, response){
    let factNumber = parseInt(request.query.n);
    response.send(facts[factNumber]);
})

app.listen(8080);