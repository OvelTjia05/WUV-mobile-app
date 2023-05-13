const User = require("./model");

const index = async (req, res, next) => {
  try {
    const result = await User.find();
    res.json({
      message: "List data user",
      data: result,
    });
  } catch (error) {}
};

module.exports = {
  index,
};
