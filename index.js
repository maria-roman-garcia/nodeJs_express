const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.method);

    res.setHeader("Content-Type", "text/plain");

    if(req.method === 'GET'){
        //res.writeHead(200, { "Content-Type": "text/plain" });
        res.statusCode = 200;
        res.end("Hello, this is a NodeJs Http Server - GET Request handled"); //finalize http connection
    } else {
        res.statusCode = 405;
        res.end("Method Not Allowed"); //finalize http connection
    }
});

server.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});
