import { server } from "../config";
import axios from "axios";

const API = axios.create({ baseURL: server });
export const apiRoutes = {
  verifyUser: ({ tokenId }) =>
    API.patch("api/p/auth/verify",{tokenId}),
};
