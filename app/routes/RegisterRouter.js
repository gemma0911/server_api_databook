import express from 'express'
import addUser from '../controller/RegisterController';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
let route = express.Router();

const loginR = (app) => {
    route.post('/login', (req, res) => {

        const { email , password } = req.body
        addUser(email,bcrypt.hash(password,10))

        res.send(JSON.stringify({
            success: true,
            notice: "gửi yêu cầu đăng nhập",
            data: req.body,
        }))
    })
    return app.use('/v1', route)
}
export default loginR