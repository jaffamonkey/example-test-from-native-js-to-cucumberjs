const request = require("request");
let randomTitle = Math.random().toString(36).substring(10);

const get_options = {
  url: 'http://localhost:3001/api/v1/todos',
  method: 'GET'
};

const post_options = {
  url: 'http://localhost:3001/api/v1/todos',
  method: 'POST',
  form: { title: randomTitle }
};

request(post_options, function (err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
  console.log('Response Code: ' + res.statusCode);
});


request(get_options, function (err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
  console.log('Response Code: ' + res.statusCode);
});

