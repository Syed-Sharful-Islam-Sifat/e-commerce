const { default: HttpError } = require("@/lib/helpers/HttpError");
const { verifyUserById } = require("@/lib/services/user-services/userServices");
import withReqandResHandler from "@/lib/middleware/requestresponsehandler";

const handler = async (req, res) => {
    
  switch (req.method) {
    case "PATCH":
      res.message = "Verified Successfully";
      const { tokenId } = req.body;
      console.log(req.body)
      const user = await verifyUserById({ userId: tokenId });

      if (!user) {
        throw new HttpError("404", "User does not exists");
      }

      return user;

    default:
      throw new HttpError("405", "Method not allowed");
  }
};

export default withReqandResHandler(handler);
