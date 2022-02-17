const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
const {pool} = require('./dbConfig')
// const { Server } = require('http')
// const hostname = '127.0.0.1'
//do i really need host name?
// const os = require('os')


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.set('view engine')

app.post("/create_customer", (req, res, next) => {
  let { name, phone, size, ofAge } = req.body
  let errors = []
  if(!name || !phone || !size || !ofAge) {
    errors.push({message: "fields empty"})
  }
  if(errors.length > 0) {
    // res.render('Post Creation', {errors})
    console.log(errors)
   } else {
     pool.query(
      `SELECT * FROM waitlist_schema.waitlist_react_table
        WHERE name = $1` , [name], (err, result) => {
          if(err) {
            console.log(name, phone, size, ofAge, result)
            throw err
          }
          if(result.rows.length !== 0) {
            return res.status(400).json({message: 'Customer already exists!'})
          }
          pool.query(
            `INSERT INTO waitlist_schema.waitlist_react_table
            (name, phone, size, of_age) VALUES ($1, $2, $3, $4)`, 
            [name, phone, size, ofAge], (err, result) => {
              if(err) {
                throw err
              }
              return res.status(200).json({message: "customer added successfully!"}), JSON.stringify(req.body)
            }
          )
        }
     )   
   }
})


app.get('/get_waitlist', (req, res, next) => {
  pool.query(
    `SELECT * FROM waitlist_schema.waitlist_react_table ORDER BY id ASC`,
    (err, result) => {
      if(err) {
        throw err
      }
      console.log(result.rows)
      return res.status(200).json({message: 'all customers', data: result.rows})
    }
  )
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, ()=> {
  console.log(`Server Listening On Port ${PORT}`)
})

