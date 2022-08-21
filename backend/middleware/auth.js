const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
    console.log("token", req.headers.authorization)
   try {
       const token = req.headers.authorization
       console.log(token)
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
}