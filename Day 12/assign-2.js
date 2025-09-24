const express = require('express');
const app = express();
const port = 3000;

// Sample todos array
const todos = [
  { id: 1, task: "Learn Node.js" },
  { id: 2, task: "Build a REST API" },
  { id: 3, task: "Write tests" },
];

// Route to get all todos as JSON
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Route to get a specific todo by id and display on web page
app.get('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === todoId);

  if (!todo) {
    return res.status(404).send('<h1>Todo not found</h1>');
  }

  // Simple HTML response
  res.send(`
    <h1>Todo Item</h1>
    <p><strong>ID:</strong> ${todo.id}</p>
    <p><strong>Task:</strong> ${todo.task}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
