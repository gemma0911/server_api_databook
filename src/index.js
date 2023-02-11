import express from 'express'
import database from '../app/config/database'
import loginR from '../app/routes/login'

const app = express()
const port = 3000
app.use(express.json())

// var sql = "INSERT INTO taikhoan (tk, mk) VALUES ('12','12');";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("inserted!");
// });
// con.end(function (err) {
//   if (err) throw err;
//   console.log("Closed!");
// });

loginR(app)

app.get('/', (req, res) => {
  res.send("hello")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


