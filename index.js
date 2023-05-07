const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
const users = [
  {id: 1, name:"Nahid Ahmed", email: "nahid@gmail.com"},
  {id: 2, name:"Salman Ahmed", email: "salman@gmail.com"},
  {id: 3, name:"Showrob Ahmed", email: "showrob@gmail.com"}
]

app.get('/', (req, res) => {
  res.send('Server is running fast!');
});
app.get('/users', (req, res) => {
  res.send(users);
});
// receive post request
app.post('/users', (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});