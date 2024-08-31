const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Database connection extablished success..."))
        .catch((err) => console.log(err));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/" , (r,s)=>{
    s.send("Welcome to server.");
});

app.use("/user" , userRoutes);

app.listen(1155,()=>{
    console.log('server http://localhost:1155');
})










