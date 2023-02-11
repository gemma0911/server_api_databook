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