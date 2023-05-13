var express = require("express");
var router = express.Router();

const { index } = require("./controller");

/* GET home page. */
router.get("/users", index);

module.exports = router;
