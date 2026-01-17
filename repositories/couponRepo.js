const Coupon = require("../model/coupon");

const create = (payload) => {
  const coupon = new Coupon(payload);
  return coupon.save();
};

const get = () => {
  return Coupon.find();
};

const getByCode = (couponCode, amount) => {
  const currentDate = new Date();
  return Coupon.findOne({
    code: couponCode,
    fromDate: { $lte: currentDate },
    toDate: { $gte: currentDate },
    minimumCartAmount: { $lte: amount },
  });
};

const getDiscountAmount = (coupon, amount) => {
  if (coupon.type == "percentage") {
    const discountByPercentage = (amount * coupon.value) / 100;
    if (discountByPercentage < coupon.maximumDiscount) {
      return discountByPercentage;
    }
    return coupon.maximumDiscount;
  } else {
    return coupon.value;
  }
};

module.exports = { create, get, getByCode, getDiscountAmount };
