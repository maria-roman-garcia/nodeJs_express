const http = require('http');
const { parse } = require('path');

const server = http.createServer();

const products = [{ name: 'banana' }, { name: 'apple' }, { name: 'orange' }];

function parseFunc(req) {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        })

        req.on('end', () => {
            try {
                resolve({ name: body.replace("productName=", "")})
            } catch (err) {
                reject(err);
            }
        })
    })
}

server.on('request', (req, res) => {
    console.log(req.method);
    console.log(req.url);

    if (req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <form action="/products" method="POST">
                <input type="text" name="productName"/>
                <button type="submit">Post</button>
            </form>
        `)
    } else if (req.url === '/products') {

        if (req.method === 'POST') {
            parseFunc(req)
                .then((product) => {
                    products.push(product);
                    res.end(`Product created successfully \n
                        ${JSON.stringify(products)}`
                    );
                })
        } else if (req.method === 'GET') {
            res.setHeader("Content-Type", "application/json");

            //res.writeHead(200, { "Content-Type": "text/plain" });
            res.statusCode = 200;
            res.end(JSON.stringify(products)); //finalize http connection
        } else {
            res.setHeader("Content-Type", "text/plain");
            res.statusCode = 405;
            res.end("Method Not Allowed"); //finalize http connection
        }
    } else {
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 404;
        res.end("Page Not Found!"); //finalize http connection
    }
});

server.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});
