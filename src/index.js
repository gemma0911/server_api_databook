import express from 'express'
import loginR from '../app/routes/login'

const app = express()
const port = 3000
app.use(express.json())

loginR(app)

app.get('/', (req, res) => {
  res.send("hello")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


