// const express = require("express");
// const server = express();

// const myFun = (req,res,next) => {
//     console.log(req.body);
//     next();
//     // if(req.body.age >= 18){
//     //     console.log("Success");
//     // }
//     // else{
//     //     res.json({message : "Sorry there is an error.."});
//     // }
// }

// // in-built middleware
// server.use(express.json())
// server.use(express.urlencoded({extended:false}))
// server.use("")

// server.get("/" ,(req,res) => {
//     res.setHeader('Content-type','text/html')
//     res.write("<h1>Hello this is home page.</h1>")
//     res.end();
// })

// server.get("/login", myFun, (req,res) => {
//     res.write("This is login page.");
//     res.end();
// })

// server.listen(1122,()=>{
//     console.log('Server at http://localhost:1122');
// })

// // 4.x body-parser
// // express.json()
// // express.urlencoded()
// // express.static()

