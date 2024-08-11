const http = require('http');

const server1 = http.createServer((req,res) => {
        console.log(req);
        res.setHeader("Content-type" , 'text/html');
        res.write("<h1>Fifth server</h1>")
        res.end();
})

server1.listen(8888,()=>{
    console.log('server at http://localhost:8888');
})
