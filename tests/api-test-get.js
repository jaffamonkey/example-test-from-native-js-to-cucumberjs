const superagent = require('superagent');

superagent.get('http://localhost:3000/api/v1/todos', (err, res) => {
    if (err) throw err;
    console.log(res.text);
});