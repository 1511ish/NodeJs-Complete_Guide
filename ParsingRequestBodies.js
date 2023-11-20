const http = require('http');
const fs = require('fs');

const Server = http.createServer();

Server.on('request', (req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="variable"></input><button type="submit">submit</button></form></body>')
        res.write('</html>')
        res.end();
        return;
    }

    else if (url === '/message' && req.method === 'POST') {
        console.log("message Page");
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            var message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            console.log(message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
})

Server.listen(4000);