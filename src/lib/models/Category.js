import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  title: {
    type: String,
    trime: true,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model("Category", categorySchema);
export { Category, categorySchema };
