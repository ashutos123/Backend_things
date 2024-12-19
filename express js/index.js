const express = require('express')
const path=require('path')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  //res.send('about')
  res.sendFile(path.join(__dirname,'index.html'))
})
app.get('contact', (req, res) => {
  res.send('contact not found!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)     
})