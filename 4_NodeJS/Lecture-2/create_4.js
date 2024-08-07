const http = require('http');


const server1 = http.createServer((req,res) => {
    res.setHeader("Content-type" , 'text/html');
        res.write("<h1>Second server</h1>")
        res.end();
})


server1.listen(9045,()=>{
    console.log('server at http://localhost:9045');
})
    