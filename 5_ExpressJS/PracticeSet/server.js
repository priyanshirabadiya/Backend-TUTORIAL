// // Simple create server
// const express = require("express");
// const app = express();

// app.get("/" , (req,res) => {
//     res.send("<h1>Hello welcome to server.</h1>");
// })

// app.listen(4444,()=>{
//     // console.log('Server at http://localhost:4444');
//     console.log('Server at http://127.0.0.1:4444');
// })

// --------------------------------------------- L-2 ---------------------------------------------

// const express = require('express');
// const app = express();
// const fs = require('fs');
// const data = fs.readFileSync('./users.json' , 'utf-8');

// app.get("/" , (req,res) => {
//     res.setHeader("Content-type" , "text/html" );
//     res.write("<h1>Hello this GET Method is called.</h1>");
//     res.end();
// })

// app.post("/" , (req,res)=>{
//     res.setHeader("Content-type" , 'text/html');
//     res.write('<h1>Hello this is POST method is called.</h1>');
//     res.end();
// })

// app.put("/" , (req,res) => {
//     res.setHeader("Content-type" , 'text/html');
//     res.write('<h1>Hello this is PUT method is called.</h1>');
//     res.end();
// })

// app.patch("/" , (req,res) => {
//     res.setHeader("Content-type" , 'text/html');
//     res.write('<h1>Hello this is PATCH method is called.</h1>');
//     res.end();
// })

// app.delete("/" , (req,res) => {
//     res.setHeader("Content-type" , 'text/html');
//     res.write('<h1>Hello this is DELETE method is called.</h1>');
//     res.end();
// })

// app.head("/" , (req,res) => {
//     res.setHeader("Content-type" , 'text/html');
//     res.write('<h1>Hello this is HEAD method is called.</h1>');
//     res.end();
// })

// app.options("/" , (req,res) => {
//     res.setHeader("Content-type" , 'text/html');
//     res.write('<h1>Hello this is OPTION method is called.</h1>');
//     res.end();
// })

// app.listen(1122,()=>{
//     console.log('Server http://localhost:1122');
// })

// --------------------------------------------- L-3 middleware ---------------------------------------------

// const express = require('express');
// const { nextTick } = require('process');
// const { serialize } = require('v8');
// const app = express();

// Application level middleware

// const myFun = (req,res,next) => {
//     if(req.query.age >= '18')
//     {
//         console.log('Success');
//         next();
//     }
//     else{
//         res.json({message:"Sorry there is an issule..."});
//     }
// }

// app.use(myFun);

// app.get("/user/:id", (req, res,next) => {
//     if (req.params.id === '2') {
//         console.log('Id : ', req.params.id);
//         next('router');
//     }
//     else {
//         next();
//     }
// },(req,res,next) => {
//     res.send("regular");
// })

// app.get("/user/:id", (req, res) => {
//     res.send("your First router.")
// })


// function originalUrl(req,res,next){
//     console.log('Url is:' , req.originalUrl);
//     next();
// }

// function Method(req,res,next){
//     console.log('Method is:' , req.method);
//     next();   
// }

// const fun = [originalUrl,Method];

// app.use(fun);

// app.get("/", (req, res) => {
//     res.send("your First router.")
// })



// ---------------------------------- Built-in middleware ----------------------------------

// app.use(express.json());

// const myFun = (req,res,next) => {
//     console.log("Header" , req.headers);
//     console.log(req.body);
//     next();
// }

// app.use(myFun);

// app.get("/" ,(req,res) =>{
//     res.write("<h1>Welcome to expressJS</h1>")
//     res.end();
// })

// urlencoded

// app.use(express.urlencoded({ extended: false }));

// const myFun = (req, res, next) => {
//     console.log(req.body);
//     next();
// }
// app.use(myFun);
// app.get("/", (req, res) => {
//     res.write("Welcome to expressJS")
//     res.end();
// })

// --------------------------------------------- static 

// app.use('/hello', express.static('public'));

// const myFun = (req,res,next) => {
//     console.log(req.body);              
//     next();
// }

// app.get("/" ,(req,res) =>{
//     res.write("Welcome to expressJS")
//     res.end();
// })
// app.get("/login",myFun ,(req,res) =>{
//     res.write("Welcome to loginPAGE.")
//     res.end();
// })



// // app.get("/hello", (req, res) => {
// //     res.write("Welcome to expressJS")
// //     res.end();
// // })

// app.listen(4545, () => {
//     console.log('S http://localhost:4545');
// })

// ---------------------------------------------------------------------------------------------------------




// const express = require("express");
// const server = express();
// const path = require('path')

// server.use(morgan('combined'));
// server.use(express.json());
// server.use(express.urlencoded({extended:false}));

// server.get("/" , (req,res) => {
//     res.send("<h1>Welcome to server.</h1>");
// })

// server.get('/file', (req, res)=>{
//     res.sendFile(path.join(__dirname,'./ggodwebp.webp'));
//     // res.sendFile(path.join(__dirname,'./public/index.html'));

// });

// server.listen(1111,() => {
//     console.log('Start at  http://localhost:1111 ');
// })


// server.get('/', (req, res) => {
//     throw new Error('Something went wrong!');
// });

// // Centralized error handling middleware
// function errorHandler(err, req, res, next) {
//     console.error(err.message);
//     // console.error(err);
//     res.status(500).json({ error: err.message });
// }

// server.use(errorHandler);

// server.listen(3000, () => {
//     console.log('Server is running on port http://localhost:3000');
// });

// const express = require('express');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;
// // app.use(express.static(path.join(__dirname, 'public')));
// // const dirPath = path.join(__dirname, 'pbfolder');
// // fs.writeFileSync('./pbfolder/test.txt' , "Hello this is test file");
// // if (!fs.existsSync(dirPath)) {
//     // fs.mkdirSync(dirPath);
// // }
// app.get('/', (req, res) => {
// 	res.send('Hello Geek');
// });

// app.listen(PORT, () => {
// 	console.log(`Server Established at PORT-http://localhost:3000`);
// });

// process.env.DEBUG = 'express:*';
// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// // app.get('/', (req, res) => {
// // 	res.send('Hello Geek');
// // });

// app.listen(PORT, () => {
// 	console.log(`Server Established at http://localhost:3000`);
// });



// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', function (req, res) {
//     console.log(req.app);
//     res.send();
// });

// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on http://localhost:3000", PORT);
// });


// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Adding some custom events
// app.on('userLoggedIn', () => {
//     console.log('A user has logged in');
// });

// app.on('userLoggedOut', () => {
//     console.log('A user has logged out');
// });

// app.get('/user', function (req, res) {
//     // Counting the number of event listeners
//     console.log("Number of event listeners:", req.app._eventsCount);
//     res.send(`Number of event listeners: ${req.app._eventsCount}`);
// });

// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log(`Server listening on http://localhost:${PORT}`);
// });

// const express = require('express');
// const app = express();
// const PORT = 3008;

// // Create a routerr instance
// const userRouterr = express.Routerr();

// // Define a router within the routerr
// userRouterr.get('/login', function (req, res) {
//     console.log('Base URL:', req.baseUrl); // Logs the base URL where the routerr is mounted
//     res.end("Hello from login router");
// });

// // Mount the routerr on a base path
// app.use('/user', userRouterr);

// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT http://localhost:3008", PORT);
// });


// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();
// const PORT = 3008;

// app.use(cookieParser());

// app.get('/', function (req, res) {
// 	req.cookies.title = 'GeeksforGeeks';
// 	console.log(req.cookies);
// 	res.send();
// });

// app.listen(PORT, function (err) {
// 	if (err) console.log(err);
// 	console.log("Server listening on http://localhost:3008", PORT);
// });


// const express = require('express')
// const app = express()

// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     res.end();
// })

// app.listen(3000,()=>{
//     console.log("http://localhost:3000");    
// })

// const express = require('express')
// const app = express()

// app.get('/user/:id', (req, res, next) => {
//     console.log('ID:', req.params.id)
//     next('router')
// }, (req, res, next) => {
//     res.send('User Info')
// })

// app.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     // res.send("sdfkjhjk")
//     next()
// })

// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', (req, res, next) => {
//     // res.send(req.params.id);
//     next();
// })

// app.get('/user/:id', (req, res, next) => {
//     res.send("Hello server");
// })


// app.listen(3000, () => {
//     console.log("http://localhost:3000");
// })


// Routerr level middleware

// const express = require('express');
// const app = express();
// const router = express.Router();
// // const cretedcndition = require('./middleware');

// // router.use(cretedcndition);
// router.use("/users",(req, res, next) => {
//     if (!req.query.age) {
//         res.send("<h1>Plz provide age.</h1>");
//     }
//     else if (req.query.age < 18) {
//         res.send("<h1>you are under aged.</h1>");
//     }
//     else {
//         next();
//     }
// });

// app.get("/", (req, res) => {
//     res.send("Hello");
// });

// router.get("/users", (req, res) => {
//     res.send("<h1>welcome to webpage</h1>");
// });

// app.use("/", router);
// app.listen(3000, () => {
//     console.log("http://localhost:3000");
// })


// const express = require('express')
// const app = express()
// const router = express.Router()

// // predicate the router with a check and bail out when needed
// router.use((req, res, next) => {
//   if (!req.headers['x-auth']) return next('router')
//   next()
// })

// router.get('/user/:id', (req, res) => {
//   res.send('hello, user!')
// })

// // use the router and 401 anything falling through
// app.use('/admin', router, (req, res) => {
//   res.sendStatus(401)
// })

// app.listen(3000, () => {
//     console.log("http://localhost:3000");
// })





