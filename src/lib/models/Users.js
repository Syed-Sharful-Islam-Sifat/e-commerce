import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },

    shippingAddress: [
      {
        district: {
          type: String,
          required: true,
        },
        postCode: {
          type: String,
          required: true,
        },
      },
    ],
    role: {
      type: String,
      enum: ["USER", "SELLER"],
    },

    isVerified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
