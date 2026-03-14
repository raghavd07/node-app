import productModel from "../models/productModel.js";
const showProducts=async(req,res)=>{
    const products=await productModel.find()
    res.render("products/index",{products})
}

const addProductForm = (req,res)=>{
    res.render("products/add")
}

const addProduct = async(req,res)=>{
    await productModel.create(req.body)
    res.redirect("/admin/products")
}
export {showProducts,addProductForm,addProduct}