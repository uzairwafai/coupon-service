const couponRepo = require("../repositories/couponRepo");

const create = async (req, res) => {
  try {
    const payload = req.body;
    //todo: validations pending.
    const newCoupon = await couponRepo.create(payload);
    res.status(201);
    res.json({ message: "Created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Creation failed!" });
    console.error(err)
  }
};

module.exports = { create };
