import express from 'express'
import addUser from '../controller/LoginController';
import { check, validationResult } from 'express-validator';

let route = express.Router();

const checkLogin = (app) => {
    route.post('/login', [
        check('email').isEmail(),
        check('password').isLength({ min: 6 })
    ], (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body

        res.send(JSON.stringify({
            success: true,
            notice: "gửi yêu cầu đăng nhập",
            data: req.body,
        }))
    })

    return app.use('/api', route)
}
export default checkLogin