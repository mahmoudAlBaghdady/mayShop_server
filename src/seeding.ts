import express from "express";
import { products } from "./data/products";
import { users } from "./data/users";
import Product from "./database/models/ProductModel";
import User from "./database/models/UserModel";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const seedUser = await User.insertMany(users);
    res.send({ seedUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const seedProducts = await Product.insertMany(products);
    res.send({ seedProducts });
  })
);

export default ImportData;
