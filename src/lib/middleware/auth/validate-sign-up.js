import Validator from "validatorjs";
import HttpError from "@/lib/helpers/HttpError";
const validateSignUp = (req, res) => {
  const rules = {
    email: "required|email",
    userName: "required|string",
    password: "required|string",
    role: "required|string",
  };

  let validation = new Validator(req.body, rules);
  if (validation.fails()) {
    throw new HttpError("400", validation.errors);
  }
};

export { validateSignUp };
