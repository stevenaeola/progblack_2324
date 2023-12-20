const express = require('express');
const app = express();
const fs = require('fs');

const factsFile = 'data/facts.json';

app.use(express.static('client'));
app.use(express.json());

const facts = JSON.parse(fs.readFileSync(factsFile));

app.get('/fact', function (request, response) {
    const factNumber = parseInt(request.query.n);
    response.send(facts[factNumber].text);
});

app.get('/facts/', function (request, response) {
    const tag = request.query.tag;
    const results = [];
    for (const fact of facts) {
        if (fact.tags.includes(tag)) {
            results.push(fact.text);
        }
    }
    response.send(results);
});

app.get('/tags', function (request, response) {
    let tags = [];
    for (const fact of facts) {
        tags = tags.concat(fact.tags);
    }
    const tagSet = new Set(tags);
    response.send([...tagSet]);
});

app.post('/fact/new2', function (request, response) {
    // get data out of request
    console.log('Loaded post request');
    console.log(request.body);
    response.send(request.body);

    const newText = request.body['new-fact-text'];
    const newTag = request.body['new-fact-tag'];
    const newFact = { text: newText, tags: [newTag] };
    facts.push(newFact);
    fs.writeFileSync(factsFile, JSON.stringify(facts));
});

module.exports = app;
