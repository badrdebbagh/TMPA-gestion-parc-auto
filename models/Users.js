const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false, // Set the default value to false for non-admin users
    },

    selectedColumns: {
      type: [String], // Array of column IDs that the user has selected to show
      default: [], // Default to an empty array
    },
    collabSelectedColumns: {
      type: [String], // Array of column IDs that the user has selected to show
      default: [], // Default to an empty array
    },
    affectationSelectedColumns: {
      type: [String], // Array of column IDs that the user has selected to show
      default: [], // Default to an empty array
    },
    infractionSelectedColumns: {
      type: [String], // Array of column IDs that the user has selected to show
      default: [], // Default to an empty array
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
