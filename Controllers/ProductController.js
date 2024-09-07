const productmodel = require('../Models/ProductModel')

module.exports.allproducts = async (req, res) => {

  try {
    const allProduct = await productmodel.find()
    res.status(200).json({ message: 'all product ', allProduct })

  } catch (error) {
    res.status(400).json({ message: 'product not found ' })

  }
};




module.exports.addproducts = async (req, res) => {

  try {
    const addProduct = new productmodel(req.body);
    await addProduct.save()
    res.status(200).json({ message: 'product added ', addProduct })

  } catch (error) {
    res.status(400).json({ message: 'product not added ', error: error.message })

  }
};


module.exports.updateproducts = async (req, res) => {
  try {
    const updateproduct = await productmodel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({ message: 'update product ', updateproduct })

  }catch(error){
    res.status(400).json({ message: ' product not update ' })

  }
}




module.exports.deleteproducts = async (req, res) => {
  try {
    const deleteproduct = await productmodel.findByIdAndDelete(req.params.id,{new:true})
    res.status(200).json({ message: 'product deleted ', deleteproduct })

    

  }catch(error){
    res.status(400).json({ message: ' product not deleted ' })

  }
}