const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
})


app.get('/user', (req, res) => {
    res.send('user page');
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/home', (req, res) => {
    res.send('home page')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})