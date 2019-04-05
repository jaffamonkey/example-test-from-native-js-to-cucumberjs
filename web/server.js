// HTTP Module for Creating Server and Serving Static Files Using Node.js
// Static Files: HTML, CSS, JS, Images
// Get Complete Source Code from Pabbly.com

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {

    // If the url path is root of domain ...
    if (req.url === "/") {

        // ... open the "index.html" file ...
        fs.readFile("index.html", "UTF-8", function (err, html) {

            // ... then include the relevant content type in the HTML <head> section
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }
    // For url's that has ".png" in url, i.e. am image location
    else if (req.url.match("\.png$")) {

        // Define general images path
        var imagePath = path.join(__dirname, 'images', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    }

    else if (req.url == '/data') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World" }));
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
    }

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');