const { TOKEN_SECRET } = require('../../config')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // pull token from a header Authorization
  // check the token for validity
  // (recreate the signature)
  const token = req.headers.authorization

  if (!token) {
    return next({ status: 401, message: 'we wants token!'})
  }
  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return next({
        message: `bad tokenz: ${err.message}`
      })
    }
  })
};
