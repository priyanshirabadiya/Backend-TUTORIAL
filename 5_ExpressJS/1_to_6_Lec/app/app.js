const express = require("express");
let app = express();


app.get("/",(req,res)=>{
    res.write("hedf");
})

app.listen(5555,()=>{
    console.log("server  http://localhost:5555");
    
})