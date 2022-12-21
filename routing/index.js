const fs = require('fs');
const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile("home.html", (err, data)=>{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } else if (req.url === '/about'){
        fs.readFile("about.html", (err, data)=>{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } else if (req.url === '/contact'){
        fs.readFile("contact.html", (err, data)=>{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } else {
        fs.readFile("404.html", (err, data)=>{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    }
});

server.listen(port, hostName, ()=>{
    console.log(`server is running at http://${hostName}:${port}`);
})