const superagent = require('superagent');
// Generates a title of 10 characters, with random letters, each time test is run
let randomTitle = Math.random().toString(36).substring(10);
const assert = require('assert');

superagent
  .post('http://localhost:3001/api/v1/todos')
  .send({ "title": randomTitle }) // sends data in JSON format
  .end((err, res) => {
    assert.ifError(err);
    assert.equal(res.status, 201); 
    assert.equal(randomTitle, res.body.todo.title)
  });

superagent
  .get('http://localhost:3001/api/v1/todos')
  .end((err, res) => {
    assert.ifError(err);
    assert.equal(res.status, 200);
  });
  
  