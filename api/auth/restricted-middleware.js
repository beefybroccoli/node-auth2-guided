const jwt = require("jsonwebtoken");
const {TOKEN_SECRET} = require("../../config");

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  //....pull token from header authorization
  //....recreate the signature
  const token = req.headers.authorization;

  if(!token){
    return next({status:401, message:"invalid token!"})
  }
  jwt.verify(token, TOKEN_SECRET, (err, decoded)=>{
    if(err){
      return next({
        status:401,
        message: `bad token: ${err.message}`
      })
    }else{
      req.decodedJwt = decoded;
      console.log("decoded = ", decoded);
      next()
    }
  })
};
