const jwt = require("jsonwebtoken")

const authenticateToken = (req,res,next) => {
    const authHeader = req.headers["authorization"];
    // console.log(req.headers);
    const token = authHeader && authHeader.split(' ')[1];
    // console.log(token);
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
      }
        console.log("No token provided");
        jwt.verify(token,"JWT_TOKEN",(err,user) => {  
          if (err) {
            console.log("Token is not valid", err);
            return res.status(403).json({ message: "Token is not valid" });
          }
          req.user = user;
          next();
})
}


module.exports = authenticateToken;