import mongoose from "mongoose";
import User from "./Users";
import Category, { categorySchema } from "./Category";
import { skuSchema } from "./sub-schema/Sku";
const productSchema = new mongoose.Schema({
  productDescription: {
    required: true,
    description: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      trim: true,
    },
  },
  productOwner: {
    type: mongoose.ObjectId,
    ref: User,
  },
  skus: {
    type: [skuSchema],
    required:true
  },
  categories:{
    type:[categorySchema],
    required:true
  }
});


const Product = mongoose.model('Product',productSchema);

export default Product;