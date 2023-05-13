const mongoose = require("mongoose");
const { mongoUrl } = require("../config");

mongoose
  .connect(mongoUrl)
  .then((res) => console.log("koneksi berhasil"))
  .catch((error) => console.log("koneksi gagal", error.message));
