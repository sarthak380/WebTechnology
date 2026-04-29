const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log("middleware executed",new Date())
    next()
})

function checkout(req, res, next) {
    console.log(req.url)   
                     
}



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})