const express = require ('express')
const router = express.Router()
const ordercontroller = require ('../Controllers/OrderController')
const checkrole = require('../Middleware/CheckRole')
const verifytoken = require('../Middleware/VerifyToken')

router.post( '/order', verifytoken,checkrole(['user']),ordercontroller.neworder)
router.get('/order', verifytoken, checkrole(['admin']),ordercontroller.allorder)
router.get('/sorder/:id', verifytoken, checkrole(['admin',"user"]),ordercontroller.specificorder)
router.get('/myorder/:id', verifytoken, checkrole(["user"]),ordercontroller.myorder)



module.exports=router