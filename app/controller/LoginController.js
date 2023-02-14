import con from "../config/database";

const loginController = (email, password) => {
    
    var sql = "select * from user";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    con.end(function (err) {
        if (err) throw err;
        console.log("Closed!");
    });
}
export default loginController