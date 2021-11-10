const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const onlyAdmin = require("../auth/check-role-middleware");

router.get("/", restricted, onlyAdmin('admin'),(req, res, next) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
