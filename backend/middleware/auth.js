const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
    console.log(req.headers.authorization)
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       console.log(userId)
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
}