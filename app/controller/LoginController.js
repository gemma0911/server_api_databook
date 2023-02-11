import con from "../config/database";
import jwt from 'jsonwebtoken'

const addUser = (tk, mk) => {
    var sql = "insert into taikhoan (tk,mk) value ('"+tk+"','"+mk+"')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("inserted!");
    });
    con.end(function (err) {
        if (err) throw err;
        console.log("Closed!");
    });
}
export default addUser