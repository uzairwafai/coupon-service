const express = require("express");
const router = express.Router();
const couponCtrl = require("../controllers/couponCtrl");

router.post("/coupon", couponCtrl.create);

module.exports = router;
