import con from "../config/database";

const addUser = (email, password) => {
    
    var sql = "insert into user (email,password) value ('"+email+"','"+password+"')";
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