const express = require("express");
const server = express();
const port = 4000;

server.get('/', (req, res) => res.send('Working!'));


server.get('/stats/:id', (req, res) => res.send(req.params.id));

function keepAlive(){
    server.listen(8000, ()=>{console.log("Server is Ready!")});
}

module.exports = keepAlive