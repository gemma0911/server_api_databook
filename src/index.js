import express from 'express'
import loginR from '../app/routes/RegisterRouter'
import con from '../app/config/database'
import checkLogin from '../app/routes/LoginRouter'
const app = express()
const port = 3000
app.use(express.json())

loginR(app)

app.get('/', (req, res) => {
   con.query('SELECT * FROM user', function (err,rows) {
    res.json(rows)
  })
})

checkLogin(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


