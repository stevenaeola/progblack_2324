const express = require('express');
const app = express();

let facts = [
    {"text": "He played for St. Kilda", "tags": ["geography", "history"]},
    {"text": "Was born in 1929", "tags": ["history"]},
    {"text": "Is not famous for cookery", "tags": ["friday"]}
];

app.get("/fact", function(request, response){
    let factNo = parseInt(request.query.n);
    response.send(facts[factNo].text);
});

app.get("/tags", function(request, response){
    let tags = [];
    for(let fact of facts){
        tags = tags.concat(fact.tags)
    }
    let tagSet = new Set(tags);
    response.send([...tagSet])
})

app.listen(8090);