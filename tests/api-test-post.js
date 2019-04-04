const superagent = require('superagent');

  superagent.post(
    'http://localhost:3000/api/v1/todos'
  )
  .send({ "title": "test title"})
  .end(function (err, res) {
    if (err) {
      console.log(err)
    } else {
      console.log(res.body)
    }
  })
  