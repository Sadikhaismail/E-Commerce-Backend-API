const express = require ('express')
const router = express.Router()
const usercontroller = require('../Controllers/UserController')

router.post('/register',usercontroller.register)
router.post('/login',usercontroller.login)

module.exports=router