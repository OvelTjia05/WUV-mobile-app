var express = require("express");
var router = express.Router();

const { index, login, register } = require("./controller");

/* GET home page. */
router.get("/users", index);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
