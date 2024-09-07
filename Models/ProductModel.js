const mongoose = require ('mongoose')


const productschema = new mongoose.Schema({
    productname: {
        type:String,
        required:true
    },

    description: {
        type:String,
        required:true
    },

    price: {
        type:String,
        required:true
    },
    
   
})

const productModel=mongoose.model('product',productschema)
module.exports = productModel