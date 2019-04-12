const superagent = require('superagent');
// Generates a title of 10 characters, with random letters, each time test is run
let randomTitle = Math.random().toString(36).substring(10);

superagent
  .post('http://localhost:3001/api/v1/todos')
  .send({ "title": randomTitle })
  .end(function (err, res) {
    if (err) {
      console.log(err)
    } else {
      console.log(res.body)
    }
  });

  superagent
  .get('http://localhost:3001/api/v1/todos')
  .end(function (err, res) {
    if (err) {
      console.log(err)
    } else {
      console.log(res.body)
    }
  });
