const express = require('express');
const app = express();

let facts = [
    "He played for St. Kilda",
    "Was born in 1929"
]

app.get("/fact", function(request, response){
    let factNo = parseInt(request.query.n);
    response.send(facts[factNo]);
});

app.listen(8090);