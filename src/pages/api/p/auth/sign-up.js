import { validateSignUp } from "@/lib/middleware/auth/validate-sign-up";
import withReqandResHandler from "@/lib/middleware/requestresponsehandler";
import { createUserAccount } from "@/lib/services/auth-services/authServices";
import messages from "@/lib/utils/response-message/response-messages";
const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      validateSignUp(req, res);
      res.message = messages.auth.signUp.success;
      const data = {
        ...req.body,
      };
      
      return await createUserAccount({ data });
    default:
      throw new HttpError("405");
  }
};

export default withReqandResHandler(handler);
