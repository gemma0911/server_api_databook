import con from "../config/database";

const loginController = (email, password) => {
    
    var sql = "select * from user";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("inserted!");
        for(var i = 0 ; i<result.length ;i++){
            console.log(result[i].email)
            console.log(result[i].password)
            if(result[i].email == email && result[i].password == password){
                return true;
            } else {
                return false;
            }
        }
    });
    return false;
}
export default loginController