const express = require("express");
const router = express.Router();
const couponCtrl = require("../controllers/couponCtrl");

router.post("/coupons", couponCtrl.create);
router.get("/coupons",couponCtrl.listCoupons);
router.post("/coupons/validate",couponCtrl.validate);

module.exports = router;
