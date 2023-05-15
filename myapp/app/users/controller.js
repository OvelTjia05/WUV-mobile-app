const User = require("./model");
const moment = require("moment");

const index = async (req, res, next) => {
  try {
    const result = await User.find();
    res.json({
      message: "List data user",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getDataByUsername = async (req, res, next) => {
  try {
    const result = await User.findOne({ username: req.params.username });
    res.json({
      message: "List data user",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await User.find({ username: req.body.username, password: req.body.password });

    if (result.length > 0) {
      res.json({
        status: "Success Login",
        message: "get data user by username and password",
        data: result,
      });
    } else {
      res.json({
        status: "Unauthorised",
        message: "wrong combination username or password",
        data: result,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const register = async (req, res, next) => {
  try {
    const usernameExist = await User.find({ username: req.body.username });

    if (usernameExist.length > 0) {
      res.json({
        status: "Failed",
        message: "Username Exist",
      });
    } else {
      await User.create(req.body);

      res.json({
        status: "Success",
        message: "Berhasil melakukan registrasi",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const tambahTransaksi = async (req, res, next) => {
  try {
    const user = await User.find({ username: req.params.username });
    const transaksiBaru = req.body;
    // console.log(user);
    // console.log(transaksiBaru);

    await User.updateOne({ username: req.params.username }, { $push: { riwayatTransaksi: transaksiBaru } });
    res.json({
      status: "berhasil",
      message: "berhasil melakukan pembayaran",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  index,
  login,
  register,
  getDataByUsername,
  tambahTransaksi,
};
