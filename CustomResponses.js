const http = require('http');

const Server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/home') {
        res.write('<html>')
        res.write('<head><title>About Responses in http module</title></head>')
        res.write('<body><h2>Welcome home</h2></body>')
        res.write('</html>')
        res.end();
        return;
    }
    else if (url === '/about') {
        res.write('<html>')
        res.write('<head><title>About Responses in http module</title></head>')
        res.write('<body><h2>Welcome to About Us</h2></body>')
        res.write('</html>')
        res.end();
        return;
    }
    else if(url === '/node') {
        res.write('<html>')
        res.write('<head><title>About Responses in http module</title></head>')
        res.write('<body><h2>Welcome to my Node Js project</h2></body>')
        res.write('</html>')
        res.end();
        return;
    }
})

Server.listen(4000);