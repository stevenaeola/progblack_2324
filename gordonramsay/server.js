const express = require("express");
const app = express();
app.use(express.static('client'));

let facts = [
    {"text": "Played for St Kilda", "tags": ["geography", "history"]},
    {"text": "Was born in 1929", "tags": ["history"]},
    {"text": "Is not famous for cookery", "tags": ["friday"]}
];

app.get("/fact", function (request, response){
    let factNumber = parseInt(request.query.n);
    response.send(facts[factNumber].text);
})

app.get("/facts/", function (request, response){
    let tag = request.query.tag;
    let results = [];
    for (let fact of facts){
        if(fact.tags.includes(tag)){
            results.push(fact.text);
        }
    }
    response.send(results);
})

app.get("/tags", function (request, response){
    let tags = [];
    for(let fact of facts){
        tags = tags.concat(fact.tags)
    }
    let tagSet = new Set(tags);
    response.send([...tagSet]);
})

app.listen(8080);