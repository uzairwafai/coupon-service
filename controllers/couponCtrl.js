const couponRepo = require("../repositories/couponRepo");

const create = async (req, res) => {
  try {
    const payload = req.body;
    // validations for creating a coupon
    const toDate = new Date(req.body.toDate);
    const fromDate = new Date(req.body.fromDate);
    if (toDate < fromDate) {
      res.status(400).json({
        message:
          "Expiration date(toDate) must be greater or equal to Creation date(fromDate)",
      });
    }

    if (req.body.type == "percentage") {
      if (req.body.value <= 0 || req.body.value > 100) {
        res.status(400).json({
          message:
            "value must be between 0 and 100 for percentage type coupons",
        });
      } else if (!req.body.maximumDiscount) {
        res.status(400).json({
          message:
            "maximumDiscount field is mandatory for percentage type coupons",
        });
      }
    }
    const newCoupon = await couponRepo.create(payload);
    res.status(201);
    res.json({ message: "Created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Creation failed!", error: err.message });
    console.error(err);
  }
};
//Listing of coupons
//todo: add pagination
const listCoupons = async (req, res) => {
  const page = req.query.page || 1;
  const pageSize = req.query.size || 5;
  const result = await couponRepo.get(page, pageSize);
  res.status(200).json(result);
};

//validation
const validate = async (req, res) => {
  const amount = req.body.amount;
  const couponCode = req.body.couponCode;
  const coupon = await couponRepo.getByCode(couponCode, amount);
  if (coupon) {
    const discountAmount = await couponRepo.getDiscountAmount(coupon, amount);
    res.status(200).json({ isValid: true, discount: discountAmount });
  } else {
    res.status(200).json({ isValid: false });
  }
};

module.exports = { create, listCoupons, validate };
