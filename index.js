const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello, this is a NodeJs Http Server"); //finalize http connection
});

server.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});
