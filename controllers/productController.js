import productModel from "../models/productModel.js";
const showProducts=async(req,res)=>{
    const products=await productModel.find()
    res.render("products/index",{products})
}

const addProductForm = (req,res)=>{
    res.render("products/add")
}
export {showProducts,addProductForm}