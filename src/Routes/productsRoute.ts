import express from "express";
import Product from "../database/models/ProductModel";
import asyncHandler from "express-async-handler";

const productsRoute= express.Router();

productsRoute.get('/', asyncHandler(async(req,res)=>{
    const products = await Product.find({});
    res.json(products);
}))

productsRoute.get('/:id',asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);

    if (product) {
        res.json(product);    
    } else {
        res.status(404);
        throw new Error('product not found')
    }
    
}))

export default productsRoute;