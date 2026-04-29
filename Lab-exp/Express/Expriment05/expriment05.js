const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   const date=new Date();
    const hours=date.getHours();
    console.log(hours);
    console.log(`time: ${hours}`);
    console.log(`date: ${date}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
