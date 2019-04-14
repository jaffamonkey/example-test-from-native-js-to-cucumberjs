const request = require("request");
let randomTitle = Math.random().toString(36).substring(10);
const assert = require('assert');

const get_options = {
  url: 'http://localhost:3001/api/v1/todos',
  method: 'GET'
};

const post_options = {
  url: 'http://localhost:3001/api/v1/todos',
  method: 'POST',
  form: { title: randomTitle }
};

// You can run this from the command line, just copy and paste! it's the equivalent of the test below
// Curl is a program that transfers data
// curl -d '{"title": "randomTitle"}' -H 'Content-Type: application/json' -v http://localhost:3001/api/v1/todos

request(post_options), function (err, res) {
  assert.ifError(err);
  assert.equal(randomTitle, res.body.todo.title)
  assert.equal(res.status, 201);
}

// You can run this from the command line, just copy and paste! it's the equivalent of the test below
// curl -v http://localhost:3001/api/v1/todos

request(get_options), function (err, res) {
  assert.ifError(err);
  assert.equal(res.status, 200);
}