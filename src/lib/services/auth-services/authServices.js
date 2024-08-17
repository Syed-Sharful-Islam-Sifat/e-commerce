import {
  createUser,
  findUserByUserName,
  userRepositories,
} from "@/lib/repositories/userRepositories";
import messages from "@/lib/utils/response-message/response-messages";
import bcrypt from "bcryptjs";
import HttpError from "@/lib/helpers/HttpError";
import { sendEmailToUser } from "../email-services/emailServices";
const createUserAccount = async ({ data }) => {
  const { userName, email, password, role } = data;

  const user = await userRepositories.findUser({ userName, email });
  if (user) {
    throw new HttpError("400", messages.auth.signUp.error.userName);
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  data = {
    userName,
    email,
    hashedPassword,
    role,
  };
  const newUser = await userRepositories.createUser({ data });
  const verificationText =
    "Please confirm your email address through this link";
  if (newUser) {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Confirmation of registration",
      text: "Welcome to e-commerce",
      html: `<a href="${process.env.NEXT_AUTH_URL}/verification?tokenId=${newUser._id}">${verificationText}</a>`,
    };
    sendEmailToUser({ mailOptions });
  }

  return newUser;
};

export { createUserAccount };
