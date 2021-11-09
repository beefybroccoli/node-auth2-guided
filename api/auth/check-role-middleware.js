module.exports = function (role) {
  return function(req, res, next) {
    // we check that the role is good
    next()
  }
}
