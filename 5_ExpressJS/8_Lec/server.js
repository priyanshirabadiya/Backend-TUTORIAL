// ---------------------------- CONNECTING WITH DATABASE ----------------------------
// const express = require("express");
// const server = express();
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const userRoutes = require("./routes/user.routes");

// mongoose.connect("mongodb://127.0.0.1:27017/node5to7")
//         .then(()=>console.log('Database connection established success...'))
//         .catch((err)=>console.log(err));


// // Middleware
// server.use(morgan('combined'));
// server.use(express.json());
// server.use(express.urlencoded({extended:false}));
    
// server.get("/" , (req,res) => {
//     res.send("<h1>Welcome to server.</h1>");
// })

// server.use("/users" , userRoutes);

// server.listen(1111,() => {
//     console.log('Start at  http://localhost:1111 ');
// })


// ---------------------------- practice new ----------------------------

const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes')
const morgan = express('morgan');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/thirdNode")
        .then(() => {console.log("Database connection established successfully...")})
        .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(morgan)

app.get("/" , (req,res) => {
    res.send("<h1>Server started.</h1>");
})

app.use("/user" , userRouter);

app.listen(1155,()=>{
    console.log('Server at http://localhost:1155');
})












