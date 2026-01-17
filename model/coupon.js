const mongoose = require("mongoose");
const structure = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Coupon code is required"],
  },
  value: {
    type: Number,
    required: [true, "Value of coupon is required"],
  },
  type: {
    type: String,
    enum: ["flat", "percentage"],
    required: true,
    default: "flat"
  },
});
