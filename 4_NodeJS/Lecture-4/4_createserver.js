// req methods and creating server by using nodeJS

// --------------------req methods----------------------
// console.log("New req is received");
// console.log("method" , req.method);
// console.log("url" , req.url);
// console.log("Content-type" , req.headers);
// console.log(req.socket.remoteAddress);
// console.log(req.headers);
// console.log(req);
// ------------------------------------------

const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    let log = `${Date.now()} ${req.method} ${req.url} new req is coming.\n`;

    const myurl = url.parse(req.url, true);
    // console.log(myurl);

    if (req.url === '/favicon.ico') return res.end();
    // Write log to file 
    fs.appendFile("log.txt", log, (err) => {

        switch (myurl.pathname) {
            case '/':
                if (req.method === 'GET')
                    res.end("This is home Page.");
                break;
            case '/about':
                const username = myurl.query.name;
                // Write query like this => http://localhost:8000/about?name=priyanshi
                res.end(`Hi, ${username}`);
                break;
            case '/search':
                const search = myurl.query.search_query;
                // Write query like this => http://localhost:8000/search?search_query=tic+tac+toe+game+in+javascript
                res.end("Here is your result:" + search);

            case '/signup':
                if (req.method === 'GET') res.end("This is sign Up page.");
                else if (req.method === 'POST') res.end("Success");

            default:
                res.end("Page not found");
        }
    });
});

server.listen(8000, () => {
    console.log('Server started at http://localhost:8000');
});
