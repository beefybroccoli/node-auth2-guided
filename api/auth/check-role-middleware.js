module.exports = function (role) {
  return function(req, res, next) {
    if (req.decodedJwt !== role) {
      next({
        status: 403,
        
      })
    }
  }
}
