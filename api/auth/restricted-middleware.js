const { TOKEN_SECRET } = require('../../config')


module.exports = (req, res, next) => {
  // pull token from a header Authorization
  // check the token for validity
  // (recreate the signature)
  next();
};
