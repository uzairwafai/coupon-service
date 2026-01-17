const Coupon = require("../model/coupon");


const create =  (payload) => {
    const coupon = new Coupon(payload);
    return coupon.save();
};

module.exports = {create}