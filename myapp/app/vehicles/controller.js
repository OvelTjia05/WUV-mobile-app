const Vehicle = require("./model");

const getDetailVehicle = async (req, res, next) => {
  try {
    const result = await Vehicle.find();
    res.json({
      message: "List data Vehicle",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getDetailVehicle,
};
