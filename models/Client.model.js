const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: String,
  wallet: {
    type: Number,
    required: true,
  },
  basket: [{
    type: mongoose.Types.ObjectId,
    ref: "Product",
    // default: [],
  }],
    total: {
      type : Number,
      default: 0,
    },
  recipe: {
    type: Boolean,
    default: false,
  },
});
const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
