var express = require("express");
var router = express.Router();

const { index, login, register, getDataByUsername, tambahTransaksi } = require("./controller");

/* GET home page. */
router.get("/users", index);
router.get("/users:username", getDataByUsername);
router.post("/login", login);
router.post("/register", register);
router.patch("/tambahTransaksi:username", tambahTransaksi);

module.exports = router;
