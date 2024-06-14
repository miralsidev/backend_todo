const router = require('express').Router();

const UserController = require('../controller/User')

router.post("/addUser", UserController.registration)
router.post("/login", UserController.login)
router.get("/Users", UserController.Users)
router.put('/EditData/:userId', UserController.UpdateUser)
router.get('/ViewData/:userId', UserController.ViewData)
router.delete('/DeleteData/:userId', UserController.deleteData)


module.exports = router
