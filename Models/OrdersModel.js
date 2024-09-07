const mongoose = require ('mongoose')


const orderschema = new mongoose.Schema({
   product : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },

    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
    // userid:{
    //     type:String,
    //     required:true
    // }


},{timestamps:true})

const orderModel=mongoose.model('order',orderschema)
module.exports = orderModel