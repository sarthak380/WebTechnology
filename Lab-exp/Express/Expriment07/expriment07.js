const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'ganesh' },
  { id: 2, name: 'yash' },
  { id: 3, name: 'sarthak' }
];
app.get('/users', (req, res) => {
  res.send(user);
});

app.get('/users/:id',(req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);  
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('User not found');
    }   
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});