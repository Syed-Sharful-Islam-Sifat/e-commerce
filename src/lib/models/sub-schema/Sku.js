import mongoose from "mongoose";
const skuSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  quantity: { type: String, required: true, default: 0 },
  price: { type: Number, required: true },
  discount: { type: Number },
  image: { type: String },
  size: { type: String },

  features: { type: [String], default: [] },
});

const Sku = mongoose.model("Sku", skuSchema);
export { Sku, skuSchema };
