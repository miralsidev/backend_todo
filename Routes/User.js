const router = require('express').Router();

const UserController = require('../controller/User')

router.post("/addUser", UserController.registration)
router.post("/login", UserController.login)
router.get("/Users", UserController.Users)

module.exports = router
