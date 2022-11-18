const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url == "/") {
        const result = fs.readFileSync('text_data.txt', 'utf8');
        res.end(result);
    }
    else if(req.url == '/home'){
        const result = fs.readFileSync('home.html', 'utf8');
        res.end(result)
    }
    else if(req.url == '/about'){
        const result = fs.readFileSync('about.html', 'utf8');
        res.end(result)
    }
    else if(req.url == '/contact'){
        const result = fs.readFileSync('contact.html', 'utf8');
        res.end(result)
    }
});
server.listen(5050, () => {
    console.log("Server is running on port 5050")
});
