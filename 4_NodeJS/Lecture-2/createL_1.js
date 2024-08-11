// http module

const http = require('http');

// const { json } = require('stream/consumers');

// const server = http.createServer((req, res) => {
    // res.write('Welcome to nodeJS');
    // res.end("<h2>hello</h2>");

    // res.write("Thank for connection with me");
    // res.end('<h1>This is ending to server</h1>')
    // res.setHeader('Content-type',"text/html");



    //     res.setHeader('Content-type', "application/json");
    //     const responseData = `[ 
    //     {       
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 2,
    //     "title": "qui est esse",
    //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    //   },
    //   {
    //     "userId": 10,
    //     "id": 100,
    //     "title": "at nam consequatur ea labore ea harum",
    //     "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
    //   }
    //   ]`;
    //     res.end(responseData);

    // open it on newtWork => refresh two time => then select on favicon.ico => Header then you can see
    // res.setHeader('dummy', "Hello world its your dummy type.");
    // res.end("<h2>Hello</h2>");

// });

// server.listen(1122, () => {
//     console.log("Server start at url http://localhost:1122");
// });



// second way to create http server

// const server = http.createServer();
// server.on("request" , (req,res) => {
//     res.setHeader("Content-type" , "text/html");
//     res.write('Welcome to NodeJS.');
//     res.end('<h1>Thank you for connecting with me.</h1>')
// })

// server.listen(1122,() => {
//     console.log('Server start at server at http://localhost:1122');
// })




