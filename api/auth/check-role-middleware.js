module.exports = role => (req, res, next) => {
  if (req.decodedJwt.role !== role) {
    next({
      status: 403,
      message: 'you have no power here!'
    })
  } else {
    next()
  }
}
