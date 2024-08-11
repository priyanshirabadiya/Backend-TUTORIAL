const express = require("express");
const server = express();

server.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>This is home Page.</h1>");
    res.end();
})

server.get("/about", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write(`<h1> Hello ${req.query.name} Welcome to about page. </h1>`)
    res.end();
})

server.listen(1111, () => {
    console.log('Server at http://localhost:1111');
})








