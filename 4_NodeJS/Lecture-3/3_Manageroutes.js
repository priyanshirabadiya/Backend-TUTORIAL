// const http = require('http');

// const server = http.createServer();
// const data = [
//     {
//         id: 1,
//         name: "priyanshi",
//         age: 11
//     },
//     {
//         id: 2,
//         name: "shubham",
//         age: 12
//     },
//     {
//         id: 3,
//         name: "krishna",
//         age: 13
//     },
//     {
//         id: 4,
//         name: "miya",
//         age: 14
//     }
// ]


// server.on("request", (req, res) => {
//     // console.log(req.url);
//     let items = req.url.split('/');
//     console.log(items);

//     if (items[1] === "user" || (items[1] === "login" && items[2] === "user")) {
//         res.setHeader("Content-type", "text/html");
//         res.write("<h1>You are in USER PAGE </h1>");
//         res.end();
//     }
//     else if (items[1] === "login" || items[2] === 'login') {
//         res.setHeader("Content-type", "text/html");
//         res.write("<h1>You are in LOGIN PAGE</h1>")
//         res.end();
//     }
//     else if (items[1] === 'friends') {
//         res.setHeader('Content-type', 'application/json');
//         if (items.length === 3) {
//             console.log(items.length);
//             let friendIndex = parseInt(items[2]);
//             // let friendIndex =  +items[2];
//             res.write(JSON.stringify(data.filter(e => e.id === friendIndex)));
//             res.end();
//         }
//         else {
//             res.write(data)
//             res.end();
//         }
//     }
//     else {
//         res.setHeader("Content-type", "text/html");
//         res.write("<h1> Page is not found</h1>");
//         res.end();
//     }
// })

// server.listen(1111, () => {
//     console.log('server is at : http://127.0.0.1:1111');
// })




const http = require('http');
const data = [
    {
        id: 1,
        name: "tisha",
        age: 15
    },
    {
        id: 2,
        name: "jisha",
        age: 45
    },
    {
        id: 3,
        name: "hina",
        age: 65
    },
    {
        id: 4,
        name: "raha",
        age: 12
    }
]

const server = http.createServer((req, res) => {
    console.log(req.url);
    const items = req.url.split('/');
    console.log(items);

    if (items[1] === "hello") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hello page</h1>");
        res.end();
    }
    else if (items[1] === "user") {
        res.setHeader("Content-type", "text/html");
        res.write("<h2>This is user page</h2>")
        res.end();
    }
    else if (items[1] === "friends") {

        if (items.length === 3) {
            res.setHeader("Content-type", "application/json");
            const index = parseInt(items[2]);
            res.write(JSON.stringify(data.filter(e => e.id === index)));
            res.end();
        }
        else {
            res.setHeader("Content-type", "application/json");
            res.write(JSON.stringify(data));
            res.end();
        }
    }
    else {
        res.setHeader("Content-type", "text/html");
        res.write(`<h2 style = "color:red" >Page not fpound</h2>`)
        res.end();
    }
});

server.listen(1122, () => {
    console.log('Server is running at http://127.0.0.1:1122');
});


