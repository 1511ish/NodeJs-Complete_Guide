const fs = require('fs');

const requestHandler = (req, res) => {
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
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.write('<html>')
            res.write('<head><title>Enter Message</title></head>')
            res.write('<body>')
            res.write(`<h3>${message}</h3>`);
            res.write('<form action="/message" method="POST"><input type="text" name="variable"></input><button type="submit">submit</button></form>')
            res.write('</body>')
            res.write('</html>')
            res.end();
        })

    }
}

// first way to expport
module.exports = requestHandler;
// second way to export using object
// third way is without using module keyword like this
// exports.any_variable = "something"


