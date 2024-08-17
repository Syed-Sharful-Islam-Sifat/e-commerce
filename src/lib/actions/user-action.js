const { apiRoutes } = require("../api-routes/apiRoutes");

const userActions = {
  VERIFY_USER: async (payload, state) => {
    const { tokenId } = payload;

    const response = await apiRoutes.verifyUser({ tokenId });
    const { type } = response.data;
    if (type === "RESULT") {
     
      return () => ({
        ...state,
        isVerified: true,
      });
    }
  },
};

export default userActions;
