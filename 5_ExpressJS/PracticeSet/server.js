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

const express = require('express');
const { nextTick } = require('process');
const { serialize } = require('v8');
const app = express();

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
//         next('route');
//     }
//     else {
//         next();
//     }
// },(req,res,next) => {
//     res.send("regular");
// })

// app.get("/user/:id", (req, res) => {
//     res.send("your First route.")
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
//     res.send("your First route.")
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

app.use('/hello', express.static('public'));

const myFun = (req,res,next) => {
    console.log(req.body);              
    next();
}

app.get("/" ,(req,res) =>{
    res.write("Welcome to expressJS")
    res.end();
})
app.get("/login",myFun ,(req,res) =>{
    res.write("Welcome to loginPAGE.")
    res.end();
})



// app.get("/hello", (req, res) => {
//     res.write("Welcome to expressJS")
//     res.end();
// })

app.listen(4545, () => {
    console.log('S http://localhost:4545');
})








