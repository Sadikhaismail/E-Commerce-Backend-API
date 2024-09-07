const express = require ('express')
const router = express.Router()
const productcontroller = require ('../Controllers/ProductController')
const checkrole = require('../Middleware/CheckRole')
const verifytoken = require('../Middleware/VerifyToken')

router.get('/products',productcontroller.allproducts)
router.post( '/products', verifytoken,checkrole(['admin']),productcontroller.addproducts)
router.put('/products/:id', verifytoken, checkrole(['admin']),productcontroller.updateproducts)
router.delete('/products/:id', verifytoken, checkrole(['admin']),productcontroller.deleteproducts)


module.exports=router