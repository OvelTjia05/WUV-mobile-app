const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  membership: {
    type: String,
    required: true,
  },
  jumlahGunakanJasa: {
    type: Number,
    required: true,
  },
  riwayatTransaksi: [
    {
      tanggalTransaksi: {
        type: Date,
        required: true,
      },
      jumlahSepeda: {
        type: Number,
        required: true,
        min: 0,
      },
      jumlahMotor: {
        type: Number,
        required: true,
        min: 0,
      },
      jumlahMobil: {
        type: Number,
        required: true,
        min: 0,
      },
      jumlahTruk: {
        type: Number,
        required: true,
        min: 0,
      },
      totalHarga: {
        type: Number,
        required: true,
        min: 1000,
      },
      totalBayar: {
        type: Number,
        required: true,
        min: 1000,
      },
      uangKembalian: {
        type: Number,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
