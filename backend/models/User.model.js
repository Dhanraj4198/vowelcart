const mongoose = require("mongoose");

const userSchema = {
  email: String,
  password: String,
  name: String,
  age: Number,
  orders: Array,
  address: Object,
  type: { type: String, enum: ["user", "admin"], default: "user" },
};

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
