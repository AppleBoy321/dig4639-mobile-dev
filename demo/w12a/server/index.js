// server/index.js
// https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const fetch = require("node-fetch");
const cors = require('cors')
const app = express()
const port = 3001
const simpleJson = {a: 10, 
  b: "Hello DIG4639!", 
  list:[
    {title:"Tonight",
    content: "Watching Netflix"},
    {title:"Tomorrow",
    content: "Completing Homework"}
  ]
}
app.use(cors())
app.get('/', async (req, res) => {
  res.send(simpleJson)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))