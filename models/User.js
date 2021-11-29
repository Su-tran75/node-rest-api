const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
    min: 6,
  },
  profilePicture: {
    type: "string",
    default: "",
  },
  coverPicture: {
    type: "string",
    default: "",
  },
  followers: {
    type: "array",
    default: [],
  },
  following: {
    type: "array",
    default: [],
  },
  isAdmin: {
    type: "boolean",
    default: false,
  },
}
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
