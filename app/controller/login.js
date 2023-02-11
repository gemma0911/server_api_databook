import express from 'express'
import con from "../config/database";
let route1 = express.Router();

route1.get('/login', function (req, res, next) {
    con.query('SELECT * FROM user ', function (err, rows) {
      if (err) {
        res.render('profile', { data: '' })
      } else {
        res.render('profile', { data: rows })
      }
    })
  })
export default route1