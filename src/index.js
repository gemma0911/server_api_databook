import express from 'express'
import loginR from '../app/routes/RegisterRouter'
import route1 from '../app/controller/login'
const app = express()
const port = 3000
app.use(express.json())

loginR(app)


app.get('/', (req, res) => {
  res.send("hello")
})

app.use('/v2',route1)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


