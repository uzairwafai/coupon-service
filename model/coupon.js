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
    required: [true, "type of coupon (percentage or flat) is required"],
    default: "flat",
  },
  fromDate: {
    type: Date,
    required: [true, "start date of coupon is required"],
  },
  toDate: {
    type: Date,
    required: [true, "Expiration date of coupon is required"],
  },
  minimumCartAmount: {
    type: Number,
    required: [true, "Minimum amount of cart to avail the coupon is required"],
  },
  maximumDiscount: {
    type: Number
  },
});

module.exports = mongoose.model("Coupon",structure)