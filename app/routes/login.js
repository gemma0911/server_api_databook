import express from 'express'
let route = express.Router();

const loginR = (app) => {
    route.post('/login', (req, res) => {
        console.log(req.body.tk1)
        console.log(req.body.mk)
        res.send(JSON.stringify({
            success: true,
            notice: "gửi yêu cầu đăng nhập",
            data: req.body,
        }))
    })
    return app.use('/v1', route)
}
export default loginR