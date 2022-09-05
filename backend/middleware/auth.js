const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization || req.cookies.user_info.token;
       const decodedToken = jwt.verify(token.split(' ')[1], 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
       res.redirect('/Auth')
   }
}