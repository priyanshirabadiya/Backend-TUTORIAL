// const http = require('http');

// const server3 = http.createServer((req, res) => {
//     // res.setHeader("Content-type" , 'text/html');
//     res.setHeader("Content-type", 'text/html');
//     res.write("<h1>server three</h1>");
//     res.end();
// })


// server3.listen(4896, () => {
//     console.log('server at  http://localhost:4896');
// })


// const server1 = http.createServer((req, res) => {
//     res.setHeader("Content-type", 'text/html');
//     res.write("<h1>Second server</h1>")
//     res.end();
// })


// server1.listen(9045, () => {
//     console.log('server at http://localhost:9045');
// })







const http = require('http');

// Server 1 (port 9045)
const server1 = http.createServer((req, res) => {
    if (req.url === '/shutdown') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Shutting down server 1');
        server1.close(() => {
            console.log('Server 1 closed');
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Server 1</h1>');
        res.end();
    }
});

server1.listen(9045, () => {
    console.log('Server 1 running at http://localhost:9045');
});

// Server 2 (port 4896)
const server2 = http.createServer((req, res) => {
    if (req.url === '/shutdown') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Shutting down server 2');
        server2.close(() => {
            console.log('Server 2 closed');
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Server 2</h1>');
        res.end();
    }
});

server2.listen(4896, () => {
    console.log('Server 2 running at http://localhost:4896');
});





