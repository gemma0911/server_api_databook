import express from 'express'
import addUser from '../controller/LoginController';
import jwt from 'jsonwebtoken'
let route = express.Router();

const loginR = (app) => {
    route.post('/login', (req, res) => {

        // addUser(req.body.tk,req.body.mk)

        const data = {
            tk : req.body.tk,
            mk : req.body.mk
        }
        const options = {
            expiresIn : "1h"
        }
        const secret = "12112123434fdfdfdf2";

        const token = jwt.sign(data, secret, options);

        jwt.verify(token, secret, (error, decoded) => {
            if (error) {
              console.error(error.message);
            } else {
              console.log(decoded);
            }
        });

        res.send(JSON.stringify({
            success: true,
            notice: "gửi yêu cầu đăng nhập",
            data: token,
        }))
    })
    route.get('/login', (req, res) =>{
        res.send('hehe')
    })
    return app.use('/v1', route)
}

export default loginR