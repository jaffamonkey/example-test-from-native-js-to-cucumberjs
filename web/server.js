// HTTP Module for Creating Server and Serving Static Files Using Node.js
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {

    // If the url path is root of domain ...
    if (request.url === "/") {

        // ... open the "index.html" file ...
        fs.readFile("web/index.html", "UTF-8", function (err, html) {

            // ... then include the relevant content type in the HTML <head> section
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(html);
        });
    }
    else if (request.url === "/angular") {

        // ... open the "index.html" file ...
        fs.readFile("web/angular/index.html", "UTF-8", function (err, html) {

            // ... then include the relevant content type in the HTML <head> section
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(html);
        });
    }
    // For url's that has ".png" in url, i.e. an image location ...
    else if (request.url.match("\.png$")) {

        // ... define images path
        var imagePath = path.join(__dirname, 'images', request.url);
        var fileStream = fs.createReadStream(imagePath);
        response.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(response);
    }

    else if (request.url == '/data') { //check the URL of the current request
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ message: "Hello World" }));
        response.end();
    }
    else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("No Page Found");
    }

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');