var server = require("http").createServer();
server.on("request", (request, response) => {
    var body = [];
    request.on("data", chunk => {
        body.push(chunk);
    });
    request
        .on("end", () => {
            let bodyString = body.concat().toString();
            response.end(bodyString);
        })
        .on("error", () => {
            response.statusCode = 400;
            response.end();
        });
    response.on("error", err => {
        console.err(err);
    });
});
server.listen(8082, () => {
    console.log("Server listening at 8082");
});

// To test: curl -d “Hello World” -H “Content-Type: text” -X POST http://localhost:8081
// The output is below
// % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
// Dload  Upload   Total   Spent    Left  Speed
// 100    18  100    11  100     7   1571   1000 --:--:-- --:--:-- --:--:--  3001�Hello�