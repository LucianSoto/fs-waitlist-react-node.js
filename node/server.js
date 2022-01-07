const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/api', (req, res) => {
  res.json({message: 'Hello From Server!!!'})
})

app.listen(PORT, ()=> {
  console.log(`Server Listening On Port ${PORT}`)
})

