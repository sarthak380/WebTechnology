const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('home page is here')
})
app.get('/about', (req, res) => {
  res.send('about page is here')
})
app.get('/contact', (req, res) => {
  res.send('contact page is here')
})
app.get('/services', (req, res) => {
  res.send('services page is here')
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
