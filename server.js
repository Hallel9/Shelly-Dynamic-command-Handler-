const express = require("express");
const server = express();
const port = 4000;

server.get('/', (req, res) => res.send('Working!'));

function keepAlive(){
    server.listen(5000, ()=>{console.log("Server is Ready!")});
}

module.exports = keepAlive