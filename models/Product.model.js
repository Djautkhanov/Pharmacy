const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: {
    type: Number,
    required: true,
  },
  saleRecipe: {
    type: Boolean,
    default: false,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
