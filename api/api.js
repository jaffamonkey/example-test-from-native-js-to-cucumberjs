// Fast minimalist web framework for Node.
var express = require("express");

// A dummy db file, which define Express db structure
var db = require("./db/db");

// Parses incoming request data
var bodyParser = require("body-parser");

// Set up the express app, the basis of our API server
const app = express();

// Ensures the data is in right format to send
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

app.post('/api/v1/todos', (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  }
  const todo = {
    id: db.length + 1,
    title: req.body.title,
  }
  db.push(todo);
  return res.status(201).send({
    success: 'true',
    message: 'todo added successfully',
    todo
  })
});

// Define what port the api server runs on, in this case the full url would be http://localhost:3001
const PORT = 3001;


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});