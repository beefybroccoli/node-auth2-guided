const { TOKEN_SECRET } = require('../../config')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // pull token from a header Authorization
  // check the token for validity
  // (recreate the signature)
  const token = req.header.authorization
};
