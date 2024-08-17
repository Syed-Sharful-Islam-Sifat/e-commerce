import dbConnect from "../config/database";

export default (handler) => {
  return async (req, res) => {
    try {
      await dbConnect();
      const response = await handler(req, res);
      const statusCode = res.statusCode || 200;
      res.status(statusCode).send({
        type: "RESULT",
        message: res.message || "OK",
        result: response,
        error: null,
      });
    } catch (error) {
      const statusCode = error.statusCode || 500;
      if (error.message) {
        res.message = error.message;
      }
      res.status(statusCode).send({
        type: "ERROR",
        message: res.message,
        result: null,
        error: error.stack,
      });
    }
  };
};
