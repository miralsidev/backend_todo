const router = require('express').Router();

const UserController = require('../controller/User')
const {UserAuth} = require('../middlewar/UserAuth')

router.post("/addUser", UserController.registration)
router.post("/login", UserController.login)
router.get("/Users",  UserAuth,UserController.Users)
router.put('/EditData/:userId', UserController.UpdateUser)
router.get('/ViewData/:userId', UserController.ViewData)
router.put('/DeleteData/:userId',UserController.deleteData)


module.exports = router
