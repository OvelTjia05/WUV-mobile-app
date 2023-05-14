var express = require("express");
var router = express.Router();

const { getDetailVehicle } = require("./controller");

/* GET home page. */
router.get("/vehicles", getDetailVehicle);

module.exports = router;
