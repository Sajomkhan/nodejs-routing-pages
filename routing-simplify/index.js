const fs = require('fs');
const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {

    const handleReadFile = (fileLocation, statusCode) => {
        fs.readFile(fileLocation, (err, data)=>{
            res.writeHead(statusCode,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/'){
        handleReadFile("./views/home.html", 200);
    } else if (req.url === '/about'){
        handleReadFile("./views/about.html", 200);
    } else if (req.url === '/contact'){
        handleReadFile("./views/contact.html", 200);
    } else {
        handleReadFile("./views/404.html", 404);
    }
});

server.listen(port, hostName, ()=>{
    console.log(`server is running at http://${hostName}:${port}`);
})