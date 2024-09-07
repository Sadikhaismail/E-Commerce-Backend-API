const ordermodel = require('../Models/OrdersModel')
const productModel = require('../Models/ProductModel')
const usermodel = require('../Models/UserModel')

module.exports.neworder = async (req, res) => {
    try {
        // const user = await usermodel.findOne({_id:req.body.userid});
        // const product = await productModel.findOne({_id:req.body.productid})

        const { productId, quantity } = req.body;




        ////find product///
        const product = await productModel.findById(productId)
        if (!product) {
            res.status(404).json({ message: 'product not found', order })

        }

        const order = new ordermodel({
            user: req.user.id,
            quantity: quantity,
            product: product._id,
            // userid:user._id,


        })


        await order.save();
        res.status(200).json({ message: 'order Successfully', order })

    } catch (error) {
        res.status(200).json({ message: 'order not Successfully', err: error.message })

    }
}















module.exports.allorder = async (req, res) => {
    try {

        const allorder = await ordermodel.find().populate("product").populate("user");
        res.status(200).json({ message: 'All Order', allorder })

    } catch (error) {
        res.status(409).json({ message: 'There is NO order', err: error.message })

    }
}





module.exports.specificorder = async (req, res) => {
    try {
        const specificorders = await ordermodel.findById(req.params.id).populate("product").populate("user");
        if (specificorders) {
            res.status(200).json({ message: 'Ordered product', specificorders });
        }



    } catch (error) {
        res.status(409).json({ message: 'There is NO ordered product', err: error.message });
    }
};





module.exports.myorder = async (req, res) => {
    try {
        const myorders = await ordermodel.findOne({user : req.params.id}).populate("product");
        if (myorders) {
            res.status(200).json({ message: 'my orders', myorders });
        }




    } catch (error) {
        res.status(409).json({ message: 'There is NO ordered product', err: error.message });
    }
};