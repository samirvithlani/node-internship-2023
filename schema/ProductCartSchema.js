const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductCartSchema = new Schema({
  //cart id  -->object
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  qty:{
    type:Number,
    default:1
  }
});
module.exports = mongoose.model("productCart", ProductCartSchema);
