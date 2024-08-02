const http = require('http');


const server1 = http.createServer((req,res) => {
    res.setHeader("Content-type" , 'text/html');
        res.write("<h1>Fourth server</h1>")
        res.end();
})


server1.listen(9011,()=>{
    console.log('server at http://localhost:9011');
})
