const express = require("express");
const app = express();

app.get("/", function (request, response){
    response.send("Gordon is not our hero");
})

app.listen(8080);